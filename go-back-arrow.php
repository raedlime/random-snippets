/*
==============================
Add button "go back"
Custom snippet by Cedric Esser
© 2021 Cedric Esser, Winnenden
https://www.cedricesser.de
==============================
*/
add_action('avada_after_header_wrapper', 'add_go_back');
function add_go_back() {
	if (is_singular(array('post', 'avada_portfolio'))) { ?>

		<div id="cpe90_goback" class="cpe90-goback">

			<?php if (is_singular('post')) {

				echo "<a href=" . get_permalink(INSERT_PAGE_ID) . " class=\"fa-arrow-left fas\"></a>";

			} else if (is_singular('avada_portfolio')) {

				echo "<a href=" . get_permalink(INSERT_PAGE_ID) . " class=\"fa-arrow-left fas\"></a>";
			} ?>

		</div>
<?php }
}
