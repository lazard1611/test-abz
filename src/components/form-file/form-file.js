import React, {useState} from "react";
import './form-file.scss';

const FormFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const allowedFormats = ['jpeg', 'jpg'];
            const fileFormat = file.name.split('.').pop().toLowerCase();
            if (!allowedFormats.includes(fileFormat)) {
                setError("The photo format must be jpeg/jpg type.");
                return;
            }

            const maxSize = 5 * 1024 * 1024;
            if (file.size > maxSize) {
                setError("The photo size must not be greater than 5 Mb.");
                return;
            }

            setError(null);
            setSelectedFile(file);
        }
    };

    return (
        <div className={`form_file__element ${error ? 'error' : ''}`}>
            <input id='file' type='file' className='form_file__input' name='file' onChange={handleFileChange}/>
            <label htmlFor='file' className='form_file__label'>Upload</label>
            <span className="form_file__name">{selectedFile ? selectedFile.name : 'Upload your photo'}</span>
            {error && <div className="form_file__error">{error}</div>}
        </div>
    )
}

export default FormFile;
