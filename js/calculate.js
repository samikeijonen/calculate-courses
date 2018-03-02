/*
 * Calculate courses sum via form input.
 *
 */
( function() {

	// Get form div.
	const coursesForm = document.getElementById( 'espoo-summerschool-courses' );

	// Bail if we do not have the form.
	if ( ! coursesForm ) {
		return;
	}

	// Get courses list.
	const courses1 = Array.from( coursesForm.querySelectorAll( '[name="courses-1"]' ) );
	const courses2 = Array.from( coursesForm.querySelectorAll( '[name="courses-2"]' ) );
	const courses3 = Array.from( coursesForm.querySelectorAll( '[name="courses-3"]' ) );

	// Sum in <span> and hidden field.
	const sumOfCourses = document.getElementById( 'sum-of-courses' );
	const totalSum     = document.getElementById( 'total-sum' );

	/**
	 * Loads scripts and styles.
	 */
	function calculateSum() {

		// Calculate how many fields have been checked.
		let checkedFields = coursesForm.querySelectorAll( '[type="radio"]:checked' );
		let total = 0;
		for ( let x = 0; x < checkedFields.length; x++ ) {
			total += 38; // Course price is always 38 euros.
		}

		showResults( total );
	}

	/**
	 * Show total sum.
	 *
	 * @param {integer} total - Total sum of courses.
	 */
	function showResults( total ) {
		sumOfCourses.innerHTML = total;
		totalSum.value = total;
	}

	/**
	 * Reset total sum.
	 */
	function resetSum() {
		sumOfCourses.innerHTML = 0;
		totalSum.value = 0;
	}

	// Listen when radio buttons have been changed.
	courses1.forEach( course1 => course1.addEventListener( 'change', calculateSum ) );
	courses2.forEach( course2 => course2.addEventListener( 'change', calculateSum ) );
	courses3.forEach( course2 => course2.addEventListener( 'change', calculateSum ) );

	const resetForm = document.getElementById( 'reset-form' );
	resetForm.addEventListener( 'click', resetSum );
} () );
