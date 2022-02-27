<template>
  <div class="homePage">
    <section>
      <div class="title">
        <h1>Applications</h1>
        <NuxtLink class="btn" to="/Application/">Plus</NuxtLink>
      </div>
      <div class="articles">
      <!-- <SingleArticle v-for="(article, index) in apps" :key="index" :data="article"/> -->
      <Slider :data="apps" />
    </div>
    </section>
    <section>
      <div class="title">
        <h1>Games</h1>
        <NuxtLink class="btn" to="/Jeu/">Plus</NuxtLink>
      </div>
      <div class="articles">
      <Slider :data="games" category="Jeu" />
    </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'defaultLayout',
  data(){
    return{
      apps: [],
      games: [],
      defaultApps: [{
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      },
      {
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      },
      {
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      },
      {
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      },
      {
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      },
      {
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      },
      {
        slug: "slug",
        title: "title",
        pictureProfile: {
          url: "/assets/img/default.png"
        },
        pouce: 0,
        creator: "creator"
      }
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      },
    }
  },
  async fetch(){
      this.apps = await this.$strapi.find('apps', {
          category: 'Application',
          _limit: 6
        })
        this.games = await this.$strapi.find('apps', {
          category: 'Jeu',
          _limit: 6
        })
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Poppins:wght@100;200;400;600;700;800;900&display=swap');

body{
  font-family: 'Poppins', sans-serif;
}

.homePage{
  padding: 0 32px;
  @include phone-only{
    padding: 0 8px;
  }
  

  section{
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 16px;
    }
  }
  .articles{
    display: flex;
    flex: 1;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;

    @include desktop{
      & .article:nth-child(6), & .article:nth-child(5){
        display: none;
      }
      
    }
    @include big-tablet{
      & .article:nth-child(6), & .article:nth-child(5){
        display: block;
      }
    }
  }
}
</style>
