<template>
  <div id="nav">
    <div id="genres">
      <span>ALL</span>
      <span>Documentary</span>
      <span>Comedy</span>
      <span>Horror</span>
      <span>crime</span>
    </div>
    <div id="sort">
      <span id="sort-label">SORT BY</span>
      <span id="sortTitle" class="dropbtn" @click="toggle">{{sort.title}}</span>
      <div id="myDropdown" class="dropdown-content">
        <a v-for="opt in sortOptions" :key="opt.name" @click="onSortClick(opt)">{{opt.title}}</a>
      </div>
      <span id="sort-by" @click="changeSortOrder"><img src="../assets/sort.svg" style="margin-bottom:2px" :class="sortOrder=== 'asc'? 'rotate180': ''"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortOptions: [
        {name: 'release_date', title: 'RELEASE DATE'},
        {name: 'vote_average', title: 'RATING'},
        {name: 'runtime', title: 'RUNTIME'},
      ]
    }
  },
  computed: {
    sort() {
      return this.$store.getters.sort;
    },
    sortOrder() {
      return this.$store.getters.sortOrder;
    }
  },
  methods: {
    toggle() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
    onSortClick(opt) {
      this.$store.dispatch('updateSort', opt)
      document.getElementById("myDropdown").classList.toggle("show");
      this.$store.dispatch('getAllMovies');
    },
    changeSortOrder() {
      this.$store.dispatch('updateSortOrder');
      this.$store.dispatch('getAllMovies');
    }
  },
  mounted() {
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];  
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
  }
};
</script>

<style>
#nav {
  padding-top: 20px;
  color: #ffff;
  height: 62px;
}
#genres span {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-transform: uppercase;
  margin-right: 30px;
}
#genres {
  position: absolute;
}
#sort {
  position: absolute;
  margin-left: 782px;
}
#sort-by {
  margin-left: 5px;
}
.rotate180 {
  transform: rotateX(180deg);
}
#sort-label {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.888889px;
  text-transform: uppercase;

  mix-blend-mode: normal;
  opacity: 0.6;
}
#sortTitle {
  cursor: pointer;
  margin-left: 31px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.888889px;
  text-transform: uppercase;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 245px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.dropdown-content a:hover {background-color: #ddd}
.show {display:block;}
</style>
