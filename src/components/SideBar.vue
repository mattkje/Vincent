<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <nav class="options">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: calc(100vh - 32px);
  background: #23272f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
}
.logo img {
  width: 120px;
  margin-bottom: 40px;
}
.options ul {
  list-style: none;
  padding: 0;
  width: 100%;
}
.options li {
  margin: 20px 0;
  width: 100%;
  text-align: center;
}
.options a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.2s;
}
.options a:hover {
  color: #4fc08d;
}
</style>