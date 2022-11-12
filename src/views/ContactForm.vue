<template>
  <div>
    <h2 style="color:black; font-weight:bold; padding:30px 0; text-align:center;">Contact Us</h2>
  <div style="display: flex; padding:0 30px 15px 30px;">
    <div class="container">
        <h4 style="text-align:start; color:black;">
          We'd love to hear from you!
        </h4>
      <form method="post" @submit.prevent="submitForm">
        <div class="row input-container">
          <div class="col-xs-12">
            <div class="styled-input wide">
              <input type="text" required v-model="form.email" />
              <label>E-Mail</label>
            </div>
          </div>

          <div class="col-xs-12">
            <div class="styled-input wide">
              <textarea required v-model="form.message"></textarea>
              <label>Message</label>
            </div>
          </div>
          <div class="col-xs-12">
            <button
              class="btn btn-primary"
              style="padding:10px 40px 10px 40px; color:white; border-radius:6px"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
    <div style="margin-top:10px;" class="col-md-12">
      <div style="display:flex; flex-direction:column;">
        <span style="text-align: start; font-size:14px;">
          <strong style="font-size:18px;">Address</strong> <br />
          Rruga Ilaz Kodra <br />
          Prishtinë, 10000 <br />
          Kosovë. <br />
          +383 43 12 31 23</span
        >
        <a class="a-tag" href="mailto:info@jobify.com" style="display:flex;"
          >info@etech.com</a
        ><br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.1872460565658!2d21.155913057996784!3d42.65341886746609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549eee8d9c0cc9%3A0x3bb301d26583096e!2sIlaz%20Kodra%2C%20Prishtina%2010000!5e0!3m2!1sen!2sus!4v1657558599455!5m2!1sen!2sus"
          style="border:none;"
          width="43%"
          height="249px"
        ></iframe>
      </div>
    </div>
  </div>

  </div>
  
</template>

<style>
h1 {
  font-family: "Poppins", sans-serif, "arial";
  font-weight: 600;
  font-size: 72px;
  color: white;
  text-align: center;
}

h4 {
  font-family: "Roboto", sans-serif, "arial";
  font-weight: 400;
  font-size: 20px;
  color: #9b9b9b;
  line-height: 1.5;
}

/* ///// inputs /////*/

input:focus ~ label,
textarea:focus ~ label,
input:valid ~ label,
textarea:valid ~ label {
  font-size: 0.75em;
  color: #999;
  top: -5px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  float: left;
  width: 293px;
  margin: 1rem 0;
  position: relative;
  border-radius: 6px;
}

@media only screen and (max-width: 768px) {
  .styled-input {
    width: 100%;
  }
}

.styled-input label {
  color: rgb(255, 255, 255);
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}

.styled-input.wide {
  width: 650px;
  max-width: 100%;
}

input,
textarea {
  padding: 30px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #4b4b4b;
  color: white;
  border-radius: 6px;
}

input:focus,
textarea:focus {
  outline: 0;
}

input:focus ~ span,
textarea:focus ~ span {
  width: 100%;
  -webkit-transition: all 0.075s ease;
  transition: all 0.075s ease;
}

textarea {
  width: 100%;
  min-height: 15em;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 25px auto;
}

.submit-btn {
  float: right;
  padding: 7px 35px;
  border-radius: 60px;
  display: inline-block;
  background-color: #4b8cfb;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.submit-btn:hover {
  transform: translateY(1px);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
}

@media (max-width: 768px) {
  .submit-btn {
    width: 100%;
    float: none;
    text-align: center;
  }
}

input[type="checkbox"] + label {
  color: #ccc;
  font-style: italic;
}

input[type="checkbox"]:checked + label {
  color: #f00;
  font-style: normal;
}
</style>

<script>
import apiRequest from "../utility/apiRequest";
export default {
  data() {
    return {
      form: {
        email: "",
        message: ""
      }
    };
  },

  methods: {
    async submitForm() {
      const response = await apiRequest.createContact({ ...this.form });

      this.$router.push({
        name: "Home",
        params: { message: response.message }
      });
      alert("Message Send Successfully");
    }
  }
};
</script>
