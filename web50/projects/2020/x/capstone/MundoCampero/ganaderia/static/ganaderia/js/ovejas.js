document.addEventListener('DOMContentLoaded', function() {
    const obsCheckbox = document.getElementById('obs');
    const observacionesContainer = document.getElementById('observacionesContainer');
    const purchasedCheckbox = document.getElementById('purchased');
    const calificadorPurezaSelect = document.getElementById('calificador_pureza');
    const parentSection = document.getElementById('parentSection');
    const purchasedCheckboxContainer = document.getElementById('purchasedCheckboxContainer');
    const origenContainer = document.getElementById('origenContainer');
    const ovejaPadreInput = document.getElementById('oveja_padre');
    const ovejaMadreInput = document.getElementById('oveja_madre');

    function toggleParentFields() {
        const selectedValue = calificadorPurezaSelect.value.toLowerCase();
        const isPedigree = selectedValue === "pedigree" || selectedValue === "pedigri";
        
        parentSection.style.display = isPedigree ? 'block' : 'none';
        purchasedCheckboxContainer.style.display = selectedValue ? 'block' : 'none';
        
        if (!isPedigree) {
            origenContainer.style.display = 'none';
            purchasedCheckbox.checked = false;
        }
        
        togglePurchasedFields();
        updateRequiredFields(isPedigree);
    }

    function togglePurchasedFields() {
        const isChecked = purchasedCheckbox.checked;
        origenContainer.style.display = isChecked ? 'block' : 'none';
    }

    // Update required fields based on pedigree selection
    function updateRequiredFields(isPedigree) {
        if (isPedigree) {
            ovejaPadreInput.required = true;
            ovejaMadreInput.required = true;
            document.getElementById('RP').required = true;
            document.getElementById('nombre_animal').required = true;
        } else {
            ovejaPadreInput.required = false;
            ovejaMadreInput.required = false;
            document.getElementById('RP').required = false;
            document.getElementById('nombre_animal').required = false;
        }
    }

    obsCheckbox.addEventListener('change', function() {
        observacionesContainer.style.display = this.checked ? 'block' : 'none';
    });

    purchasedCheckbox.addEventListener('change', togglePurchasedFields);

    calificadorPurezaSelect.addEventListener('change', toggleParentFields);

    // Initial setup
    toggleParentFields();
    observacionesContainer.style.display = 'none';

    // Form validation
    const addOvinoForm = document.getElementById('addOvinoForm');
    addOvinoForm.addEventListener('submit', function(event) {
        const isPedigree = calificadorPurezaSelect.value.toLowerCase() === "pedigree" || calificadorPurezaSelect.value.toLowerCase() === "pedigri";
        
        if (isPedigree) {
            if (!ovejaPadreInput.value || !ovejaMadreInput.value) {
                event.preventDefault();
                alert('Para ovejas pedigri, los campos RP padre y RP madre son obligatorios.');
                return;
            }
        }

        if (!addOvinoForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        addOvinoForm.classList.add('was-validated');
    });
    //  validamos que los campos de rp madre y padre no coincidan y que ninguno   coincida con el rp del animal
    function validateParentFields() {
        const padre = document.getElementById('oveja_padre');
        const madre = document.getElementById('oveja_madre');
        const RP = document.getElementById('RP');
    
        // Resetear mensajes de validación personalizados
        padre.setCustomValidity('');
        madre.setCustomValidity('');
        RP.setCustomValidity('');
    
        // Validar que el RP del padre y madre no sean iguales
        if (padre.value === madre.value) {
            const errorMsg = 'Los RP de padre y madre no pueden ser iguales';
            padre.setCustomValidity(errorMsg);
            madre.setCustomValidity(errorMsg);
        }
    
        // Validar que el RP del animal no sea igual al del padre o madre
        if (padre.value === RP.value || madre.value === RP.value) {
            const errorRPAnimal = 'El RP del animal no puede ser igual al RP de su padre o madre';
            RP.setCustomValidity(errorRPAnimal);
    
            if (padre.value === RP.value) {
                padre.setCustomValidity('El RP del padre no puede ser igual al RP del animal');
            }
            if (madre.value === RP.value) {
                madre.setCustomValidity('El RP de la madre no puede ser igual al RP del animal');
            }
        }
    }
    
    // Escuchar eventos de entrada en ambos campos
    ovejaMadreInput.addEventListener('input', validateParentFields);
    ovejaPadreInput.addEventListener('input', validateParentFields);
    document.getElementById('RP').addEventListener('input', validateParentFields);


});

