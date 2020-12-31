<template>
  <div id="main-content">
    <div id="personal-info">
      <h2>Personal Info</h2>
      <div class="content-block">
        <p>Zhanhua Liang</p>
        <p>Male</p>
        <p>Born 1993.07 in Guangzhou, Guangdong, China</p>
        <p>Contact: <a :href="'mailto:'+email">{{ email }}</a></p>
      </div>
      <hr />
    </div>

    <div id="education">
      <h2>Education</h2>
      <div
        class="content-block"
        v-for="education in educations"
        :key="education.university"
      >
        <p>{{ education.university }}</p>
        <p>{{ education.degree }}</p>
        <p>{{ education.major }}</p>
        <p>{{ education.period }}</p>
      </div>
      <hr />
    </div>

    <div id="projects">
      <h2>Projects</h2>
      <div class="projects-container">
        <div class="project-item" v-for="project in projects" :key="project.title">
          <h3>{{ project.title }}</h3>
          <p><u>Mainly responsable for:</u> {{ project.responsibility }}</p>
          <p><u>Description:</u> {{ project.description }}</p>
          <a v-if="project.url" :href="'//' + project.url" target="_black" rel="external nofollow noreferrer noopener">{{ project.url }}</a>
        </div>
      </div>
      <hr />
    </div>

    <div id="job-experience">
      <h2>Job Experience</h2>
      <div class="job-container">
        <div class="job-item" v-for="job in jobExperience" :key="job.title">
          <h3>{{ job.title }}</h3>
          <p><u>Position:</u> {{ job.position }}</p>
          <p><u>Description:</u> {{ job.description }}</p>
          <p><u>Period:</u> {{ job.period }}</p>
        </div>
      </div>
      <hr>
    </div>

    <div id="skills">
      <h2>Skills</h2>
      <div class="skill">
        <p>Main: HTML, CSS, JavaScript, Bootstrap, Vue.js 3</p>
        <p>jQuery, Swift, Android</p>
        <p>Mandarin (native), Cantonese (native), English (good), German (beginner)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      email: 'zhanhua1993@gmail.com',
      educations: [
        {
          university: 'University of Bremen',
          degree: 'Master of Science (M.Sc.)',
          major: 'Digital Media',
          period: '2016.10-2020.10'
        },
        {
          university: 'Guangdong University of Technology',
          degree: 'Bachlor',
          major: 'Digital Media Technology',
          period: '2012.09-2020.08'
        }
      ],
      projects: [
        {
          title: 'Schornstein-bremen.de',
          description: 'E-commerce online shop of ES Chimney GmbH.',
          responsibility: 'Magento 2 front-end implementation (html, css, js, Bootstrap), backend production management.',
          img: '',
          url: 'schornstein-bremen.de'
        },
        {
          title: 'Smarine.de',
          description: 'E-commerce online shop of Smarine GmbH.',
          responsibility: 'Magento 2 front-end implementation (html, css, js).',
          img: '',
          url: 'smarine.de'
        },
        {
          title: 'linus-ling.com',
          description: 'Personal website of Hui Ling.',
          responsibility: 'Front-end implementation (html, css, js, Bootstrap).',
          img: '',
          url: 'linus-ling.com'
        },
        {
          title: 'Master Thesis -- An "E-cigarette" For You Smartphone: Understanding The Impact Of Greyscale Mode On Smartphone Usage',
          description: 'Compare personal smartphone addiction level before and after using greyscale mode on smartphones in 10 days.',
          responsibility: 'Greyscale mode App implementation (Android), data collection (Firebase).',
          img: '',
          url: ''
        },
        {
          title: 'Master Project -- Navigation Failure',
          description: 'Compare user bahaviour changes between reality and VR environment, in terms of smartphone navigation interaction.',
          responsibility: 'Navigational and user interaction tracking App impelementaion (iOS, Google Map API).',
          img: '',
          url: ''
        }
      ],
      jobExperience: [
        {
          title: 'ES Chimney',
          position: 'Front end developer',
          description: 'Implement front end web pages for the online shops of the company with html, css, js, Bootstrap and Magento 2 CMS. Also help managing products in Magento 2 backend.',
          period: 'Since 2019.09'
        }
      ]
    }
  }
}
</script>

<style scoped>
#main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  border-left: 1px solid lightgray;
  border-top: 1px solid lightgray;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
}

hr {
  width: 30%;
}

.content-block {
  margin: 20px;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
}

.project-item {
  max-width: 560px;
  min-width: 300px;
  padding: 20px;
  flex-grow: 1;
}

.job-container {
  display: flex;
}

.job-item {
  padding: 20px;
}

.project-item p, .job-item p, .skill p {
  margin: 16px auto;
  line-height: 20px;
}

.skill {
  padding: 20px;
  text-align: center;
}
</style>
