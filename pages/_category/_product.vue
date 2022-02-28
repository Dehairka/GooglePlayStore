<template>
  <div class="singleProductPage">
    <section v-if="app[0]">
        <div class="header">
            <img v-if="app[0].pictureProfile" :src="urlPicture(app[0].pictureProfile.url)" alt="Picture's article">
            <img v-else :src="require('@/assets/img/default.png')" alt="">
            <div class="title">
                <h1>{{ app[0].title }}</h1>
                <span>{{ app[0].creator }}</span>
                <span>{{ app[0].category }}</span><br>
                <span v-if="app[0].toutPublic">Tout public</span>
            </div>
            <div class="avis">
                <div class="stars">
            <svg
            id="Layer_1"
            class="pointer"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.027 485.027" style="enable-background:new 0 0 485.027 485.027;"
	          xml:space="preserve" @click.prevent="updatePouce()">
<g>
	<g>
		<path
id="XMLID_1929_" style="fill:#FF6464;" d="M109.4,459.991H13c-2.1,0-3.9-1.8-3.9-3.9v-248.4c0-2.1,1.8-3.9,3.9-3.9h96.4
			c2.1,0,3.9,1.8,3.9,3.9v248.4C113.3,458.191,111.6,459.991,109.4,459.991z"/>
		<path
d="M284.6,20.391c-28.2-20.7-67.2-8.8-68.8-8.3c-3.8,1.2-6.3,4.7-6.3,8.6v85.8c0,29.1-13.8,53.7-41.1,73.2
			c-21.1,15.1-42.7,21.3-42.9,21.4c-0.2,0-0.3,0.1-0.5,0.2l-5.1,1.7c-3-4.9-8.3-8.2-14.5-8.2H16.9c-9.3,0-16.9,7.6-16.9,16.9v240.5
			c0,9.3,7.6,16.9,16.9,16.9h88.6c8,0,14.7-5.6,16.4-13c11.9,12.7,28.8,20.7,47.6,20.7h209.8c44.6,0,73.1-23.3,78.1-64l26.8-170.2
			c3.9-24.7-6.2-49.7-25.8-63.7c-11.1-8-24.2-12.2-37.9-12.2H311.4v-79.6C311.4,55.891,302.4,33.491,284.6,20.391z M104.2,450.891
			H18.1v-238h86.1V450.891z M420.5,184.791c9.9,0,19.3,3,27.3,8.8c14,10.1,21.3,28.2,18.4,46.2l-26.7,170.3c0,0.1,0,0.2,0,0.3
			c-4.9,39.8-35.4,48.2-60.2,48.2H169.5c-26,0-47.1-21.1-47.1-47.1v-190.2l8.3-2.8c2.9-0.8,25.2-7.6,47.8-23.7
			c32.1-22.8,49.1-53.3,49.1-88.2v-78.6c10.4-2,31.3-4,46.4,7.1c12.8,9.4,19.3,26.9,19.3,52v88.7c0,5,4.1,9.1,9.1,9.1h118.1V184.791
			z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
            </svg>
            <span>{{ app[0].pouce }}</span>
                </div>
                <a v-if="app[0].apk" class="btn" :href="urlPicture(app[0].apk.url)" download="">Installer</a>
                <input v-else type="button" class="btn" value="Partager l'apk">
            </div>
        </div>
        <div class="content">
          <div class="content_slider">
            <img v-if="app[0].slider.length <= 1 && app[0].slider.length" :src="urlPicture(app[0].slider[0].url)" alt="cover article">
            <SliderPicture v-else :data="app[0].slider"/>
          </div>
          <!-- <div class="longDescription" v-html="app[0].longDescription"></div> -->
          <read-more more-str="Read more" :text="app[0].longDescription" link="#" less-str="Read less" :max-chars="400"></read-more>
        </div>
        <DividerArticle />
        <div class="infos">
          <h2>Informations complémentaires</h2>
          <ul>
            <li>
              <h3>Update</h3>
              <span>10 Décembre</span>
            </li>
            <li>
              <h3>Size</h3>
              <span>{{ app[0].size }}o</span>
            </li>
            <li>
              <h3>Downloads</h3>
              <span>{{ app[0].installation }}+</span>
            </li>
            <li>
              <h3>Version</h3>
              <span>{{ app[0].version }}</span>
            </li>
            <li>
              <h3>Android Necessary</h3>
              <span>{{ app[0].androidNecessary }} ou supérieure</span>
            </li>
            <li>
              <h3>For all public</h3>
              <span v-if="app[0].toutPublic">Yes</span>
              <span v-else>No/Don't know</span>
            </li>
          </ul>
        </div>
    </section>
    <section v-else>
      <div class="header">
            <!-- <img :src="require('@/assets/img/default.png')" alt="Picture's article loading default"> -->
            <div class="default"></div>
            <div class="title">
                <h1>Titre de l'application</h1>
                <span>Créateur</span>
                <span>Category</span><br>
                <span>Tout public</span>
            </div>
            <div class="avis">
                <div class="stars">
            <svg
id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 485.027 485.027" style="enable-background:new 0 0 485.027 485.027;" xml:space="preserve">
<g>
	<g>
		<path
id="XMLID_1929_" style="fill:#FF6464;" d="M109.4,459.991H13c-2.1,0-3.9-1.8-3.9-3.9v-248.4c0-2.1,1.8-3.9,3.9-3.9h96.4
			c2.1,0,3.9,1.8,3.9,3.9v248.4C113.3,458.191,111.6,459.991,109.4,459.991z"/>
		<path
d="M284.6,20.391c-28.2-20.7-67.2-8.8-68.8-8.3c-3.8,1.2-6.3,4.7-6.3,8.6v85.8c0,29.1-13.8,53.7-41.1,73.2
			c-21.1,15.1-42.7,21.3-42.9,21.4c-0.2,0-0.3,0.1-0.5,0.2l-5.1,1.7c-3-4.9-8.3-8.2-14.5-8.2H16.9c-9.3,0-16.9,7.6-16.9,16.9v240.5
			c0,9.3,7.6,16.9,16.9,16.9h88.6c8,0,14.7-5.6,16.4-13c11.9,12.7,28.8,20.7,47.6,20.7h209.8c44.6,0,73.1-23.3,78.1-64l26.8-170.2
			c3.9-24.7-6.2-49.7-25.8-63.7c-11.1-8-24.2-12.2-37.9-12.2H311.4v-79.6C311.4,55.891,302.4,33.491,284.6,20.391z M104.2,450.891
			H18.1v-238h86.1V450.891z M420.5,184.791c9.9,0,19.3,3,27.3,8.8c14,10.1,21.3,28.2,18.4,46.2l-26.7,170.3c0,0.1,0,0.2,0,0.3
			c-4.9,39.8-35.4,48.2-60.2,48.2H169.5c-26,0-47.1-21.1-47.1-47.1v-190.2l8.3-2.8c2.9-0.8,25.2-7.6,47.8-23.7
			c32.1-22.8,49.1-53.3,49.1-88.2v-78.6c10.4-2,31.3-4,46.4,7.1c12.8,9.4,19.3,26.9,19.3,52v88.7c0,5,4.1,9.1,9.1,9.1h118.1V184.791
			z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
            </svg>
            <span>0</span>
                </div>
                <input type="button" class="btn" value="Partager l'apk">
            </div>
        </div>
        <div class="content">
          <div class="content_slider">
            <!-- <img :src="require('@/assets/img/default_slider.png')" alt="cover article default slider"> -->
            <div class="default_slider"></div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat rem atque error ad nemo. Iusto aliquam, cumque expedita atque quo accusantium libero laudantium cum, odio earum esse voluptates totam.</p>
        </div>
        <DividerArticle />
        <div class="infos">
          <h2>Informations complémentaires</h2>
          <ul>
            <li>
              <h3>Mise à jour</h3>
              <span>10 Décembre</span>
            </li>
            <li>
              <h3>Taille</h3>
              <span>0Mo</span>
            </li>
            <li>
              <h3>Installation</h3>
              <span>0</span>
            </li>
            <li>
              <h3>Version</h3>
              <span>1.0.0</span>
            </li>
            <li>
              <h3>Nécessite Android</h3>
              <span>Aucune infos</span>
            </li>
            <li>
              <h3>Classification du contenu</h3>
              <span>Tout public</span>
            </li>
          </ul>
        </div>
    </section>
    <div class="relatedProducts">
      <h2>Related apps</h2>
      <RelatedProduct v-for="(article, index) in relatedApps.slice(0,6)" :key="index" :data="article"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'defaultLayout',
  data(){
    return{
      app: [],
      relatedApps: []
    }
  },
  async fetch(){
    this.app = await this.$strapi.find('apps', {
      slug: this.$route.params.product
    })
    this.relatedApps = await this.$strapi.find('apps',{
      _limit: 6
    })  
  },
  methods: {
      urlPicture(url){
          return process.env.URL + url + ""
        },
      async updatePouce(){
        this.app[0].pouce++
        await this.$strapi.update('apps', this.app[0].id, {
          pouce: this.app[0].pouce
        })
      }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Poppins:wght@100;200;400;600;700;800;900&display=swap');

body{
  font-family: 'Poppins', sans-serif;
}

.singleProductPage{
  padding: 0 32px;
  display: flex;
  justify-content: center;

  @include big-tablet{
    flex-direction: column;
    padding: 0;
    width: 100%;
    margin: 16px 0;
  }

  section{
    background-color: $white;
    margin: 32px;
    width: 70%;
    padding: 16px;
    box-sizing: border-box;

    @include big-tablet{
      width: 100%;
      margin: 0;

      .content .content_slider img{
        object-fit: cover;
        width: 100%;
        
      }
      
    }
    .header{
      display: flex;
      justify-content: space-between;
      @include big-tablet{
        flex-direction: column;
        
      }

      .default{
        width: 180px;
        height: 180px;
        background-color: $grey;
        margin: 16px;
      }

      img{
        max-width: 180px;
        min-width: 180px;
        margin: 16px;
        @include big-tablet{
          align-self: center;
        }
      }
      .title{
        flex: 1;
      }
      .avis{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 16px;

        .stars{
          display: flex;
          span{
              padding: 0 8px;
          }
          svg{
              width: 20px;
              height: 20px;
          }
      }
      }
        
    }
    .content{
      position: relative;
      &_slider{
        display: flex;
        justify-content: center;
        img{
          margin: 16px;
          width: 100%;
          min-height: 400px;
        }
        .default_slider{
          width: 100%;
          height: 300px;
          background-color: $grey;
          margin: 16px;
        }
      }
      p{
        position: relative;
        top: 32px;
      }
      span{
        display: flex;
        justify-content: center;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(0,0,0,0) 100%);
        position: relative;
        top: -16px;
        padding-top: 32px;
        bottom: 0;
      }
    }
    .infos{
      h2{
        text-transform: uppercase;
        color: $black;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 30%;
          @include big-tablet{
            width: 50%;
          }
        }
      }
    }
  }
  .relatedProducts{
    // width: 20%;
    @include big-tablet{
      width: 80%;
      margin: auto;
    }
  }
}
</style>
