<script lang="ts">
import Router from 'svelte-spa-router';
  import ArtPage from './Pages/ArtPage/ArtPage.svelte';
import Home from './Pages/Home/Home.svelte';
import Login from './Pages/Login/Login.svelte';
import Main from './Pages/Main/Main.svelte';
  import NotFound from './Pages/NotFound/NotFound.svelte';
import SignUp from './Pages/SignUp/signUp.svelte';

const routes:object = {
    '/': Home,
    '/login':Login,
    '/signup':SignUp,
    '/home': Main,
    '/art/:id': ArtPage,
    '*': NotFound
  
};
</script>

<main class="app-main">
 <Router {routes} />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Irish+Grover&display=swap');
  *{
    font-family: 'Indie Flower', cursive;
  }
  .app-main{
    width: 100%;
    height: 100%;
    background: linear-gradient(113.06deg, rgba(254, 96, 41,0.8) 0.63%, rgba(55, 31, 151,0.8) 100%);
  }
</style>
