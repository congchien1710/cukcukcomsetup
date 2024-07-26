document.addEventListener('DOMContentLoaded', () => {
    const fileTableBody = document.querySelector('#fileTable tbody');

    // Load existing files from server
    const loadFiles = () => {
        fetch('/api/data')
            .then(response => response.json())
            .then(files => {
                fileTableBody.innerHTML = '';
                for (const [fileName, fileContent] of Object.entries(files)) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${fileContent.VongLap}</td>
                        <td>${fileContent.Version}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" target="_blank" href="${fileContent.ENT_Link}"> Link MISA</a>
                            </br>
                            <a class="btn btn-sm btn-success mt-1" target="_blank" href="${fileContent.ENT_LinkGG}"> Google Drive</a>
                        </td>
                        <td>
                            <a class="btn btn-sm btn-primary" target="_blank" href="${fileContent.TS_Link}"> Link MISA</a>
                            </br>
                            <a class="btn btn-sm btn-success mt-1" target="_blank" href="${fileContent.TS_LinkGG}"> Google Drive</a>
                        </td>
                        <td>
                            <a class="btn btn-sm btn-primary" target="_blank" href="${fileContent.QS_Link}"> Link MISA</a>
                            </br>
                            <a class="btn btn-sm btn-success mt-1" target="_blank" href="${fileContent.QS_LinkGG}"> Google Drive</a>
                        </td>
                        <td>
                            <a></a>
                            </br>
                            <a class="btn btn-sm btn-success mt-1" target="_blank" href="${fileContent.MobileSaleDE_GG}"> Google Drive</a>
                        </td>
                        <td>
                            <a></a>
                            </br>
                            <a class="btn btn-sm btn-primary" target="_blank" href="${fileContent.MobileKDS_GG}"> Google Drive</a>
                        </td>
                        <td>
                            <a></a>
                            </br>
                            <a class="btn btn-sm btn-primary" target="_blank" href="${fileContent.MobileDIB_GG}"> Google Drive</a>
                        </td>
                    `;
                    fileTableBody.appendChild(row);
                }
            });
    };

    loadFiles();
});
