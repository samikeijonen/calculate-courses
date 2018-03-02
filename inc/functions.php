<?php
/**
 * Functions and shortcodes.
 *
 * @package CalculateCourses
 */

namespace Calculate_Courses;

/**
 * Sent email also to form sender.
 *
 * @param  string $to Email to this person.
 * @return array  $to
 */
function email_to( $to ) {
	$email = sanitize_email( $_POST['Email'] );
	$to    = array( $to, $email );

	return $to;
}
add_filter( 'wplf_espoon-kesalukioon-ilmoittautuminen_email_copy_to', __NAMESPACE__ . '\\email_to' );
