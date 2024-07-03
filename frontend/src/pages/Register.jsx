import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        comments: '',
        celebrities: []
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        let errorMessage = '';

        if (formData.celebrities.length === 0) {
            errorMessage += 'Please select at least one celebrity.';
        }

        if (errorMessage !== '') {
            alert(errorMessage);
        } else {
            // Submit form data
        }
    };

    return (
        <>
            <h1>Welcome to Gala Fest</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name ...." required /><br />
                </fieldset>
                <fieldset>
                    <legend>E-mail</legend>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} /><br />
                </fieldset>
                <fieldset>
                    <legend>Phone No</legend>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter only numbers !" pattern="[0-9]*" maxLength="10" required /><br />
                </fieldset>
                <fieldset>
                    <legend>Role</legend>
                    <section id="roles">
                        <input type="radio" name="role" id="student" value="student" checked={formData.role === 'student'} onChange={handleInputChange} required />
                        <label htmlFor="student">Student</label><br />
                        <input type="radio" name="role" value="staff" id="staff" checked={formData.role === 'staff'} onChange={handleInputChange} />
                        <label htmlFor="staff">Staff</label><br />
                        <input type="radio" name="role" value="admin" id="admin" checked={formData.role === 'admin'} onChange={handleInputChange} />
                        <label htmlFor="admin">Admin</label><br />
                    </section>
                </fieldset>
                <fieldset>
                    <legend>Comments</legend>
                    <textarea name="comments" value={formData.comments} onChange={handleInputChange} placeholder="Type your Thoughts" cols="40" rows="5"></textarea>
                </fieldset>
                <fieldset>
                    <legend>Interested celebrities</legend>
                    <section id="celebrity">
                        <input type="checkbox" name="celebrities" value="Abdul Kalam" id="ak" checked={formData.celebrities.includes('Abdul Kalam')} onChange={handleInputChange} />
                        <label htmlFor="ak">Abdul Kalam</label><br />
                        <input type="checkbox" name="celebrities" value="kamarajar" id="kr" checked={formData.celebrities.includes('kamarajar')} onChange={handleInputChange} />
                        <label htmlFor="kr">Kama Rajar</label><br />
                        <input type="checkbox" name="celebrities" value="nikola tesla" id="nt" checked={formData.celebrities.includes('nikola tesla')} onChange={handleInputChange} />
                        <label htmlFor="nt">Nikola Tesla</label><br />
                        <input type="checkbox" name="celebrities" value="others" id="others" checked={formData.celebrities.includes('others')} onChange={handleInputChange} />
                        <label htmlFor="others">Others</label><br />
                    </section>
                </fieldset><br />
                <button className="btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Register;
