<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <router-link to="/">
      <b-navbar-brand>
      <img src="../assets/EuroFlags/EuroNL.png" width="30" height="30" alt />
    </b-navbar-brand>
    <b-navbar-brand >Eurovision 2021</b-navbar-brand>
    </router-link>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/rotterdam">Rotterdam 2021</router-link>
        <router-link class="nav-link" to="/singers">Participantes</router-link>
        <router-link class="nav-link" to="/votes">Votos</router-link>
        <router-link class="nav-link" to="/moreVoted">Nuestro ranking</router-link>
        <router-link class="nav-link" to="/favorites">Favoritos</router-link>
        <router-link class="nav-link" to="/about">Sobre mí</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Idioma" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav right>
        <b-nav-item href="https://github.com/missmay4/Eurovision-2021-Project">
          <i class="fa fa-github fa-lg" aria-hidden="true"></i>
        </b-nav-item>
        <b-nav-item href="https://open.spotify.com/playlist/6G539AHr4MVEGkndPxjhND?si=kuW1aQmjScqh-IBMMoxl2w">
          <i class="fa fa-spotify fa-lg" aria-hidden="true"></i>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>