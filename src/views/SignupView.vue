<template>
  <div class="signup">
    <div id="signup-div">
      <section class="signup-section">
        <form>
          <label>
            Email:
            <input
              class="signup-field"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>
          <label>
            Password:
            <input
              v-model="password"
              @input="validate"
              class="signup-field"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            /><br />
          </label>

          <div id="signup-button-space">
            <input
              :disabled="!canSubmit"
              type="submit"
              value="Signup"
              id="signup-button"
            />
          </div>
        </form>

        <div id="password-validation-div">
          <p
            id="password-valid"
            v-bind:class="canSubmit ? 'passwordValid' : 'invalid'"
          >
            <b>Current password is INVALID</b>
          </p>
          <h3>Password must contain the following:</h3>
          <p v-bind:class="isSpecificLength ? 'valid' : 'invalid'">
            Minimum <b>8 characters</b> and maximum
            <b>14 characters</b>
          </p>
          <p v-bind:class="oneUppercase ? 'valid' : 'invalid'">
            A <b>capital</b> letter
          </p>
          <p v-bind:class="twoLowercase ? 'valid' : 'invalid'">
            <b>2 lowercase</b> letters
          </p>
          <p v-bind:class="hasNumber ? 'valid' : 'invalid'">A <b>number</b></p>
          <p v-bind:class="startsWithUppercase ? 'valid' : 'invalid'">
            <b>Starts</b> with <b>uppercase</b> letter
          </p>
          <p v-bind:class="hasUnderscore ? 'valid' : 'invalid'">
            Contains an <b>underscore ('_')</b>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      password: "",
      isSpecificLength: false,
      oneUppercase: false,
      twoLowercase: false,
      hasNumber: false,
      startsWithUppercase: false,
      hasUnderscore: false,
      canSubmit: false,
    };
  },
  methods: {
    validate: function () {
      let value = this.password;
      this.isSpecificLength = 8 <= value.length && value.length < 15;
      this.oneUppercase = /[A-Z]/.test(value);
      this.twoLowercase = /[a-z].*[a-z]/.test(value);
      this.hasNumber = /\d/.test(value);
      this.startsWithUppercase = /[A-Z]/.test(value.charAt(0));
      this.hasUnderscore = value.includes("_");
      this.canSubmit =
        this.isSpecificLength &&
        this.oneUppercase &&
        this.twoLowercase &&
        this.hasNumber &&
        this.startsWithUppercase &&
        this.hasUnderscore;

      if (this.canSubmit) {
        document.getElementById("password-valid").innerHTML =
          "Current password is valid!";
      } else {
        document.getElementById("password-valid").innerHTML =
          "<b>Current password is INVALID</b>";
      }
    },
  },
};
</script>

<style>
/* Styling for the rectangle in which the signup form will be present */
.signup-section {
  margin: 10px;
  width: 400px;
  background-color: rgba(238, 238, 238, 0.722);
  padding: 20px;
  border-radius: 8px;
  line-height: 1.5;
}

/* Centering the signup-section */
#signup-div {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

/* Spacing out form fields */
.signup-section > form {
  line-height: 1.75;
}

/* Making the signup button more prominent on the page */
#signup-button {
  padding: 7.5px 15px;
  margin-top: 5px;
  background-color: rgb(19, 45, 196);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
}

/* Makes the signup button larger when hovering over it */
#signup-button:hover {
  transform: scale(1.1);
}

/* Greys out button when disabled*/
#signup-button:disabled {
  background-color: rgb(112, 128, 144);
}

/* Aligning the form fields in a satisfying way */
.signup-field {
  height: 20px;
  flex: 0 0 225px;
  margin-left: 10px;
}

@media (max-width: 450px) {
  .signup-section input {
    width: 125px;
  }

  #signup-button {
    width: 75px;
  }

  .signup-field {
    height: 20px;
    flex: 0 0 175px;
  }
}

/* Signup section compatibility with cellphones/small screens */
@media (max-width: 400px) {
  .signup-field {
    height: 20px;
    flex: 0 0 100px;
  }
}

/* Aligning the form fields in a satisfying way */
label {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  line-height: 26px;
  margin-bottom: 10px;
  margin-right: 35px;
}

#password-validation-div {
  margin-top: 40px;
  line-height: 1;
  text-align: left;
  font-size: 13px;
}

/* Add a green text */
.passwordValid {
  color: green;
}

/* Add a green text color and strikethrough */
.valid {
  color: green;
  text-decoration: line-through;
}

/* Add a red text color */
.invalid {
  color: red;
}
</style>
