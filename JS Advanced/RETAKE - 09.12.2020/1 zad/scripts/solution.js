function solve() {
   let $singMeUpButton = $('.courseFoot button');

   $singMeUpButton.on('click', function () {
      let $newCourses = $('.courseBody ul li');
      let $formForEducation = $('#educationForm input');


      let priceForAllCourses = {
         fundamentals: 170,
         advanced: 180,
         applications: 190,
         web: 490
      };

      let allCoursesChecked = [];

      for (const $course of $newCourses) {
         if (isChecked($course.children[0])) {
            let allCoursesName = $course.children[1].textContent;
            addToCourseBody(allCoursesName);

            allCoursesChecked.push(allCoursesName.split(' ')[1].toLowerCase());
         }
      }

      if (allCoursesChecked.length === 4) {
         addToCourseBody('HTML and CSS');
      }

      for (const type of $formForEducation) {
         if (type.checked) {
            calculateCost(allCoursesChecked, type.value, priceForAllCourses);
         }
      }

      for (const $course of $newCourses) {
         $course.children[0].checked = false;
      }

   });

   function isChecked($courseInput) {
      return $courseInput.checked;
   }

   function addToCourseBody(courseName) {
      let $bodyForCourse = $('.courseBody ul');

      let $liElement = $('<li></li>');
      $liElement.text(courseName.split(' - ')[0].replace(' ', '-'));

      $bodyForCourse.append($liElement);
   }

   function calculateCost(courses, formType, coursePrices) {


      if (courses.includes('advanced') && courses.includes('fundamentals')) {
         coursePrices['advanced'] = +coursePrices['advanced'] * 0.90;
      }

      if (courses.includes('advanced') && courses.includes('fundamentals') && courses.includes('applications')) {
         coursePrices['fundamentals'] = +coursePrices['fundamentals'] * 0.94;
         coursePrices['advanced'] = +coursePrices['advanced'] * 0.94;
         coursePrices['applications'] = +coursePrices['applications'] * 0.94;
      }



      if (formType === 'online') {
         for (const course of courses) {
            coursePrices[course] = coursePrices[course] - (coursePrices[course] * 0.06);
         }
      }

      let finalPrice = 0;
      for (const course of courses) {
         finalPrice += coursePrices[course];
      }

      $('.courseFoot p').text('Cost: ' + Math.floor(finalPrice) + '.00 BGN');

   }

}

solve();
