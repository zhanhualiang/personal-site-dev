<template>
  <div id="main-content">
    <div id="personal-info">
      <h2>{{ $t("personal-info.title") }}</h2>
      <div class="content-block">
        <h3>{{ $t("personal-info.name") }}</h3>
        <p>{{ $t("personal-info.gender") }}</p>
        <p>{{ $t("personal-info.birth") }}</p>
        <p v-html="$t('personal-info.contact')"></p>
        <p v-html="$t('personal-info.git')"></p>
        <p v-html="$t('personal-info.cv')"></p>
      </div>
      <hr />
    </div>

    <div id="education">
      <h2>{{ $t("education.title") }}</h2>
      <div class="content-block" v-for="i in educationCount" :key="i">
        <h3>{{ $t(`education.content[${i}].university`) }}</h3>
        <p>{{ $t(`education.content[${i}].degree`) }}</p>
        <p>{{ $t(`education.content[${i}].major`) }}</p>
        <p>{{ $t(`education.content[${i}].period`) }}</p>
      </div>
      <hr />
    </div>

    <div id="projects">
      <h2>{{ $t("project.title") }}</h2>
      <div class="projects-container">
        <div class="project-item" v-for="i in projectCount" :key="i">
          <h3>{{ $t(`project.content[${i}].title`) }}</h3>
          <p>
            <u>{{ $t("project.description") }}</u>
            {{ $t(`project.content[${i}].description`) }}
          </p>
          <p>
            <u>{{ $t("project.responsibility") }}</u>
            {{ $t(`project.content[${i}].responsibility`) }}
          </p>
          <a
            v-if="$t(`project.content[${i}].url`)"
            :href="'//' + $t(`project.content[${i}].url`)"
            target="_black"
            rel="external nofollow noreferrer noopener"
            >{{ $t(`project.content[${i}].url`) }}</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div id="job-experience">
      <h2>{{ $t('jobExperience.title') }}</h2>
      <div class="job-container">
        <div class="job-item" v-for="i in jobExperienceCount" :key="i">
          <h3>{{ $t(`jobExperience.content[${i}].title`) }}</h3>
          <p><u>{{ $t(`jobExperience.position`) }}</u> {{ $t(`jobExperience.content[${i}].position`) }}</p>
          <p><u>{{ $t(`jobExperience.description`) }}</u> {{ $t(`jobExperience.content[${i}].description`) }}</p>
          <p><u>{{ $t(`jobExperience.period`) }}:</u> {{ $t(`jobExperience.content[${i}].period`) }}</p>
        </div>
      </div>
      <hr />
    </div>

    <div id="skills">
      <h2>{{ $t('skill.title') }}</h2>
      <div class="skill">
        <p>HTML, CSS, JavaScript, Bootstrap, Vue.js 3</p>
        <p>jQuery, Swift, Android</p>
        <p>{{ $t('skill.language') }}</p>
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
      git: 'https://github.com/zhanhualiang',
      educationCount: [0, 1],
      projectCount: [0, 1, 2, 3, 4],
      jobExperienceCount: [0]
    }
  },
  methods: {
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
  min-width: 200px;
  padding: 20px;
  flex-grow: 1;
}

.job-container {
  display: flex;
}

.job-item {
  padding: 20px;
}

.project-item p,
.job-item p,
.skill p {
  margin: 16px auto;
  line-height: 20px;
}

.skill {
  padding: 20px;
  text-align: center;
}
</style>
