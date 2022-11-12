<template>
  <section>
    <div style="color:black; background-color:white;" class="about-section">
      <h1 style="text-align:start">About Us</h1>
      <hr style="border: 2px solid gray" />
      <h2 style="margin-top:30px">Our Mission</h2>
      <p style=" text-align:justify; padding:40px 50px 10px 50px">
        Over the past month, nonprofit, government, and commercial customers
        have requested assistance in accelerating important humanitarian efforts
        that are helping millions of refugees and people within Ukraine and
        surrounding countries. Amazon Web Services (AWS) technologies and
        experts have been supporting a range of activities, including powering
        applications that are facilitating the intake of Ukrainian refugees at
        border crossings, providing technology to help establish safe evacuation
        routes, setting up emergency internet connectivity, and enabling secure
        communications. We are working closely with international aid
        organizations like Help.NGO, which specializes in emergency response, by
        providing technology resources that are supporting refugee needs. We are
        also working with local Ukrainian organizations, such as Optima School,
        the country’s largest distance learning school, to scale up and support
        the thousands of displaced students who now need access to online
        education. Because of the complexity of the work on the ground and the
        evolving security landscape, technology assistance can have an outsized
        impact on the success of relief efforts. This is why AWS is committing
        $15 million in cloud computing credits, and technical expertise, to
        continue supporting local and global organizations addressing this
        humanitarian crisis. Existing customers that would like to access these
        resources to further their efforts should reach out to their account
        managers, while new customers can get started here.
      </p>
    </div>

    <h2 style="text-align: center;padding-bottom:50px">Our Team</h2>
    <div style="padding: 0 100px;" class="row">
      <div class="column">
        <div class="card">
          <img
            :src="
              'https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'
            "
            height="300px"
            alt="Jane"
            style="width: 100%"
          />
          <div class="container">
            <h2 style="padding-top:10px">Elon Musk</h2>
            <p class="title">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>elon@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            :src="
              'https://api.time.com/wp-content/uploads/2018/09/bill-gates-africa.jpg'
            "
            height="300px"
            alt="Mike"
            style="width: 100%"
          />
          <div class="container">
            <h2 style="padding-top:10px">Bill Gates</h2>
            <p class="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            :src="
              'https://www.success.com/wp-content/uploads/2018/07/JeffBezos_SecretstoSuccess-1-1024x682.jpg'
            "
            alt="Mike"
            style="width: 100%"
            height="300px"
          />
          <div class="container">
            <h2 style="padding-top:10px">Jeff Bezos</h2>
            <p class="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>john@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
