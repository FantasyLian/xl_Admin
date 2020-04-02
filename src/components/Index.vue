<template>

	<section class="container">
		<Header></Header>
		<Sidenav></Sidenav>
		<Footer></Footer>
	</section>

</template>

<script>

import Header from './Header';
import Sidenav from './SideNav';
// import Panel from './Main'
import Footer from './Footer'

export default {
	name: 'Index',
	components: { Header, Sidenav, Footer },
	data () {
		return {
			user: {
				
			}
		}
	},
	mounted() {

	},
	methods: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">

</style>