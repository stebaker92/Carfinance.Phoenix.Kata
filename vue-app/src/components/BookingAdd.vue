<template>
  <div class="hello">
    <h1>Add booking</h1>


    <form class="offset-4 col-md-4 text-left">
      <div class="form-group">
        <label>Contact Name</label>
        <input type="text" class="form-control" v-model="booking.contactName" />
      </div>

      <div class="form-group">
        <label>Contact Number</label>
        <input type="text" class="form-control" v-model="booking.contactNumber" />
      </div>

      <div class="form-group">
        <label>Party Size</label>
        <input type="number" class="form-control" v-model="booking.numberOfPeople" />
      </div>

      <div class="form-group">
        <label>Table Number</label>
        <input type="number" class="form-control" v-model="booking.tableNumber" />
      </div>

      <div class="form-group">
        <label>Booking Time</label>
        <input type="datetime-local" class="form-control" v-model="booking.bookingTime" />
      </div>

      <div class="text text-danger">
        {{response}}
      </div>

      <button type="button" class="btn btn-primary" v-on:click="saveData()">
        Save
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "BookingAdd",
  props: {
    msg: String
  },
  data() {
    return {
      response: null,
      booking: {}
    };
  },
  methods: {
    saveData() {
      fetch("http://localhost:52363/booking", {
        method: "post",
        body: JSON.stringify(this.booking),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        if (response.status === 200) {
          console.log("yes");
          this.$router.push('/')
        } else {
          response.json().then(data => {
            this.response = data.message;
          });
        }
      });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
