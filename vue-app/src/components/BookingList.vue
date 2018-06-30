<template>
  <div class="hello">
    <h1>Booking List</h1>

    <button class="btn btn-primary">
      <router-link to="/add">	
        New Booking
      </router-link>
      </button>

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
      <tr v-for="item in bookings" :key="item.bookingId" v-bind:class="{ red : isRed(item), blue: isBlue(item) }" v-on:click="navTo(item.bookingId)">
        <td>{{item.contactName | upper}}</td>
        <td>{{item.contactNumber}}</td>
        <td>{{item.numberOfPeople}}</td>
        <td>{{item.tableNumber}}</td>
        <td>{{item.bookingTime.toLocaleString()}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
var useMocks = true;

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
      if (useMocks) {
        this.bookings = [
          {
            contactName: "Test test",
            bookingTime: new Date()
          },
          {
            // contactName: undefined,
            bookingTime: new Date()
          }
        ];
        return;
      }

      fetch("http://localhost:52363/booking")
        .then(response => {
          return response.json();
        })
        .then(data => {
          data.sort((a, b) => {
            return new Date(a.bookingTime) - new Date(b.bookingTime);
          });
          data.map(d => {
            d.bookingTime = new Date(d.bookingTime);
          });
          this.bookings = data;
        });
    },
    navTo(id) {
      this.$router.push({ path: "edit", query: { bookingId: id } });
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
