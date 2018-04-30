<template>
  <div class="hello">
    <h1>Booking List</h1>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Contact Name</th>
        <th>Contact Number</th>
        <th>Table Size</th>
        <th>Talbe Number</th>
        <th>Booking Time</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in bookings" :key="item.bookingId" v-bind:class="{ red : isRed(item), blue: isBlue(item) }">
        <td>{{item.contactName}}</td>
        <td>{{item.contactNumber}}</td>
        <td>{{item.numberOfPeople}}</td>
        <td>{{item.tableNumber}}</td>
        <td>{{item.bookingTime}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BookingList",
  props: {
    msg: String
  },
  data() {
    return {
      bookings: []
    };
  },
  methods: {
    getData() {
      fetch("http://localhost:52363/booking")
        .then(response => {
          return response.json();
        })
        .then(data => {
          data.sort((a, b) => {
            return new Date(a.bookingTime) - new Date(b.bookingTime);
          });
          this.bookings = data;
        });
    },
    isRed(b) {
      return b.numberOfPeople > 6;
    },
    isBlue(b) {
      return b.numberOfPeople === 1;
    }
  },
  mounted() {
    this.getData();
  }
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
