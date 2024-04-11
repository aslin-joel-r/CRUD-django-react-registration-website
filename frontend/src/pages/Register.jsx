function Register(){

    const form = document.querySelector('form');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Default browser validation for name, email, and radio buttons
        if (!this.checkValidity()) {
            return;
        }

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const role = document.querySelector('input[name="role"]:checked');
        const checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        
        let errorMessage = '';

        if (checkedBoxes.length === 0) {
            errorMessage += 'Please select at least one celebrity.';
        }

        if (errorMessage !== '') {
            alert(errorMessage);
        } else {
            this.submit();
        }
    });
    return(
        
    <div>
        <h1>Welcome to Gala Fest</h1>
        <form method="post">
      
            <fieldset>
                <legend>Name</legend>
                <input type="text" name="username" id="name" placeholder="Your Name ...." required/><br>
            </fieldset>
            <fieldset>
                <legend>E-mail</legend>
                <input type="email" name="email"  id="mail"/><br>
            </fieldset>
            <fieldset>
                <legend>Phone No</legend>
                <input type="tel" placeholder="Enter only numbers !" pattern="[0-9]*" name="phone" id="phone" maxlength="10" required/><br/>
            </fieldset>
        <fieldset>
            <legend>Role</legend>
            <section id="roles">
                <input type="radio" name="role" id="student" value="student" required/>
                <label  for="student">Student</label><br/>
                <input type="radio" name="role" value="staff" id="staff"/>
                <label for="staff">Staff</label><br/>
                <input value="admin" type="radio" name="role" id="admin">
                <label for="admin">Admin</label><br>
            </section>
        </fieldset>
        <fieldset>
            <legend>Comments</legend>
            <textarea placeholder="Type your Thoughts" name="comments" id="comments" cols="40" rows="5"></textarea>
        </fieldset>
        <fieldset>
            <legend>Interested celebrities</legend>
            <section id="celebrity">
                <input value="Abdul Kalam" type="checkbox" name="celebrities" id="ak"/>
                <label for="ak">Abdul Kalam</label><br/>
                <input value="kamarajar"  type="checkbox" name="celebrities" id="kr"/>
                <label for="kr">Kama Rajar</label><br/>
                <input value="nikola tesla"  type="checkbox" name="celebrities" id="nt">
                <label for="nt">Nikola Tesla</label><br>
                <input value="others" type="checkbox" name="celebrities" id="others">
                <label for="others">Others</label><br>
            </section>
        </fieldset><br/>
        <button class="btn-primary">Submit</button>
    </form>
</div>


   
    )
}

export default Register