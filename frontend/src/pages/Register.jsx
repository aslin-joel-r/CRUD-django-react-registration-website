function Register()
{
    
    return(
        <div>
            <h1>Welcome to Gala Fest</h1>
            <form>
      
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" name="username" id="name" placeholder="Your Name ...." required/><br/>
                </fieldset>
                <fieldset>
                    <legend>E-mail</legend>
                    <input type="email" name="email"  id="mail"/><br/>
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
            <button >Submit</button>
            </form>
        </div>

         )
    }

export default Register