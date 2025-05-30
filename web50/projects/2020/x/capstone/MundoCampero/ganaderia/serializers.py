# serializers.py
from rest_framework import serializers
from .models import Oveja,Venta,User

from .utils import get_sheep_count_by_type_and_age, sale_information

"""
This module contains serializers for the 'Oveja' (Sheep), 'Venta' (Sale), and 'Establecimiento' (Establishment) models.
The purpose of these serializers is to transform the model instances into JSON format, allowing dynamic data to be 
sent from the server to the frontend for display in the dashboard and analysis views.

1. `OvejaSerializer`: Serializes data related to sheep. It includes details like RP (Registration Number), weight, breed, 
   age, and observations. This serializer is useful when displaying specific sheep information in the frontend.
   
2. `VentaSerializer`: Serializes data related to sales. It includes details like the sheep involved in the sale, total weight, 
   value of the meat, and the type of sale. This serializer is used to send information about sheep sales to the frontend.
   
3. `EstablecimientoSerializer`: Serializes data related to the establishment (the user). It includes additional fields that calculate 
   the total number of sheep and sales per category dynamically using custom methods. This serializer is useful for showing 
   an overview of the establishment’s data, such as the total number of sheep of different types and the number of sales 
   categorized by type (remate, frigorífico, individual sales, and donations).

### Key Features:
- `cantidad_ovinos`: A dynamic field that calculates the number of sheep by type (e.g., lambs, ewes, rams, etc.) for the 
  establishment, using the `get_sheep_count_by_type_and_age` function.
  
- `cantidad_ventas_cat`: A dynamic field that calculates the number of sales per category (e.g., auction, slaughterhouse, 
  individual sales, donations) using the `sale_information` function.

### Purpose:
These serializers are used to send dynamic data from the backend to the frontend, where it can be visualized in the dashboard 
or used for further analysis. The data sent includes the count of sheep by type and the number of sales per category, making 
it easier for users to understand the distribution of sheep and sales within the establishment.

### Integration:
This module works as part of the API that provides dynamic data for the frontend, particularly for the dashboard and analysis 
pages. The frontend can consume the API responses to display the data in real-time, providing users with valuable insights 
about their sheep and sales activity.

Example API Endpoints:
- `/api/ovejas/` - List of sheep with all their details.
- `/api/ventas/` - List of sales with related sheep data.
- `/api/establecimiento/` - Information about the establishment, including the number of sheep and sales.

By using these serializers, the backend can send structured data to the frontend in a consistent manner, ensuring that 
users can visualize key metrics related to their establishment in real-time.
"""

class OvejaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oveja
        fields = [
            'id',
            'BU',
            'RP',
            'name',
            'weight',
            'raza',
            'age',
            'birth_date',
            'sex',
            'purity_qualifier',
            'notes',
            'father',
            'mother',
            'establishment',
            'status',
            'origin_establishment',
            ]
    
class VentaSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Venta
        fields = [
            'id',
            'sheeps',
            'sale_date',
            'total_weight',
            'meat_value',
            'establishment',
            'sale_type',
            ]
        
class EstablecimientoSerializer(serializers.ModelSerializer):
    sheep_count = serializers.SerializerMethodField()
    sale_category_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'RUT',
            'registration_date',
            'ARU_bred_registration',

            # cantidad de ovinos y ventas
            'sheep_count',
            'sale_category_count',
        ]
    
    def get_sheep_count(self, obj):
        lambs, ewe_lambs, yearlings, yearling_ewes, rams, ewes, total_sheep = get_sheep_count_by_type_and_age(self.context['request'])

        # Return the dictionary with the sheep count
        return {
            'Lambs': lambs,
            'Ewe Lambs': ewe_lambs,
            'Yearlings': yearlings,
            'Yearling Ewes': yearling_ewes,
            'Rams': rams,
            'Ewes': ewes,
            'Total Sheep': total_sheep
        }
    
    def get_sale_category_count(self, obj):
        sales_info = sale_information(self.context['request'])

        # Return the dictionary with the sales count by category
        return {
            'auction_sales_count': sales_info['auction_sales_count'],
            'slaughterhouse_sales_count': sales_info['slaughterhouse_sales_count'],
            'individual_sales_count': sales_info['individual_sales_count'],
            'donation_count': sales_info['total_donations'],
        }
    

    