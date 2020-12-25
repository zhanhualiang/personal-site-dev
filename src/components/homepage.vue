<template>
  <div id="main-content">
    <div id="personal-info">
      <h2>Personal Info</h2>
      <div class="content-block">
        <p>Zhanhua Liang</p>
        <p>Male</p>
        <p>Born 1993.07 in Guangzhou, Guangdong, China</p>
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
      <div v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>Mainly responsable for: {{ project.responsibility }}</p>
        <p>Description: {{ project.description }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
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
        { title: 'Schornstein-bremen.de', description: '', responsibility: '', img: '', url: '' },
        { title: 'linus-ling.com', description: '', responsibility: '', img: '', url: '' },
        { title: 'Master Thesis', description: '', responsibility: '', img: '', url: '' },
        { title: 'Master Project', description: '', responsibility: '', img: '', url: '' }
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
</style>
