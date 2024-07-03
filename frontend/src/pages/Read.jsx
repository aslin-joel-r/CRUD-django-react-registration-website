import React from 'react';

function Read({ registrations }) {
    const deleteRecord = (recordId) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            fetch(`/delete/${recordId}/`, {
                method: 'DELETE',
                headers: {
                    'X-CSRFToken': '{{ csrf_token }}'  // Add CSRF token for Django
                }
            })
            .then(response => {
                if (response.ok) {
                    window.location.reload();  // Reload the page after successful deletion
                } else {
                    throw new Error('Failed to delete record');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };

    return (
        <>
            <h1>All Feedbacks</h1>
            <section>
                {registrations.map(registration => (
                    <div key={registration.id} id="div">
                        <div id="container">
                            <p>Name: {registration.username}</p>
                            <p>Email: {registration.email}</p>
                            <p>Phone no: {registration.phone}</p>
                            <p>Role: {registration.role}</p>
                            <p>Comments: {registration.comments}</p>
                            <p>Interested celebrities:</p>
                            <ul>
                                {registration.celebrities.split(" ").map(celebrity => (
                                    <li key={celebrity}>{celebrity}</li>
                                ))}
                            </ul>
                        </div>
                        <br />
                        <button><a href={`/update/${registration.id}/`}>Update</a></button>
                        <button onClick={() => deleteRecord(registration.id)}>Delete</button>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Read;
