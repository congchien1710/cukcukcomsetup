document.addEventListener('DOMContentLoaded', () => {
    const fileForm = document.getElementById('fileForm');
    const inputs = [
        'VongLap', 'Version', 'ENT_Link', 'ENT_LinkGG', 
        'TS_Link', 'TS_LinkGG', 'QS_Link', 'QS_LinkGG', 
        'MobileSaleDE_GG', 'MobileKDS_GG', 'MobileDIB_GG'
    ];


    // Add or update a file
    fileForm.onsubmit = (e) => {
        e.preventDefault();
        const fileContent = {};
        inputs.forEach(id => {
            fileContent[id] = document.getElementById(id).value;
        });
        const fileName = fileContent.VongLap; // Use VongLap as the unique identifier
        if (fileName) {
            fetch('/data')
                .then(response => response.json())
                .then(files => {
                    files[fileName] = fileContent;
                    return fetch('/data', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(files)
                    });
                })
                .then(() => {
                    inputs.forEach(id => {
                        document.getElementById(id).value = '';
                    });
                    //loadFiles();
                });
        }
    };
});
