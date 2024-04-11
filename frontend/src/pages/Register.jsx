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
                        <input type="radio" name="role" id="role1" value="Participant" required/>
                        <label for="role1">Participant</label>
                        <input type="radio" name="role" id="role2" value="Volunteer" required/>
                        <label for="role2">Volunteer</label>
                    </section>
                </fieldset>
            <button >Submit</button>
            </form>
        </div>

         )
    }

export default Register