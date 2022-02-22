<template>
  <nav class="navbar navbar-expand-md navbar-primary bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="../assets/logo.png" alt="logo"></router-link>
      <button class="custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" style="color:white;">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop" style="color:white;">SHOP</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" style="color:white;">ABOUT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>