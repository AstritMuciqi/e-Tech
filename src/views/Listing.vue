

   

    <template>
  <section>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
     <div class="hover" style=" display:flex; justify-content:center; align-items: center; widht: 120px; height: 120px;">
              <!-- <div class="subcategories-wrapper ">
<ul class="subcategories clearfix">
<li class="ty-subcategories__item bbox rounded-m__box">
<input type="hidden" value="680">
<a href="https://gjirafa50.com/gaming/konzola-retro/">
<img data-src="https://hhstsyoejx.gjirafa.net/gj50/subcategories/233_680%20konzola%20retro.jpg" class="ty-subcategories-img lazyload" alt="Konzola retro" />
<span>Konzola retro</span>
</a>
</li>
</ul> -->
<!-- </div> -->
      <span class="h6-hover" style=" width: 180px; margin: 6px; box-shadow: 5px -6px 6px -4px; -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1); border-radius: 5%; " v-for="category in categoryList" :key="category.id">
           <button class="hover" style="  display: inline-flex;align-items: center; justify-content: center; font-size:14px;margin:20px;text-decoration:none;color:black;font-weight:bold;" @click.prevent="selectByCategory(category.name)"><img width="45px" height="45px" :src="require(`../assets/${category.photo}`)" class="ty-subcategories-img lazyload" />
{{category.name}}</button>
      </span>
    </div>
    <hr style="border-top: 1px solid gray; margin-top: 0px; ">
    <div >
        <div style="display:flex;flex-wrap:wrap;width:1200px;margin-left:40px;" class="card-deck">

            <div v-show="isDiv" class="card" style="flex:0 0 22.333333% ;height:380px;display:flex; flex-direction:column;padding:10px 80px 10px 50px ">
              <span style="font:weight:bold;font-size:20px;margin-left:-70px"  ><b>Filter By Brand :</b> </span>
      <span v-for="brand in brandList" :key="brand.id">
        <v-btn class="btn btn-outline-info" style="height:35px; width:130px;font-size:14px;margin:10px;box-shadow: 5px -6px 6px -4px; -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1); border-radius: 5%;text-decoration:none;color:black;font-weight:bold" @click.prevent="selectByBrand(brand.name)"><img width="20px" height="20px" :src="require(`../assets/${brand.photo}`)" class="ty-subcategories-img lazyload" />{{brand.name}}</v-btn>
      </span>
    </div>
            <div style="flex:0 0 22.333333%;" class="card" v-for="product in productList" :key="product._id">
            <ProductCard  :product="product" />  
            </div>         
        </div>
    </div>  
  </section>
</template>

<style>
.h6-hover {
    padding: 0;
    
}
.hover :hover{
  background-color: white;
}

</style>


<script>
import { mapGetters } from "vuex";
import apiRequest from "../utility/apiRequest";
import ProductCard from "./ProductCard.vue";
import axios from 'axios';
export default {
  components:{
    ProductCard,
    },
  data(){
    return{
      isDiv: false,
      category: "",
    }
  },
  created() {
    this.fetchCategories();
    this.fetchBrands();
    this.fetchProducts();

  },
  methods: {
    async fetchProducts() {
      let div = document.getElementById("brandFilter");
      this.$isLoading(true) // show the loading screen
      const result = await apiRequest.getProductList();
      this.$store.dispatch("fetchProducts", result).then(()=>{
        this.isDiv=false;
      }).finally(()=>{
              this.$isLoading(false)
      });
    },
    async fetchCategories(){
      const result = await apiRequest.getCategoryList();
      this.$store.dispatch("fetchCategories", result);
                
    },
     async fetchBrands(){
      const result = await apiRequest.getBrandList();
      this.$store.dispatch("fetchBrands", result);
                
    },
    async selectByCategory(category){
      const result = await (await axios.get(`http://localhost:5000/api/v1/products/?category=${category}`)).data;
      const data = result.data;
      this.isDiv=true;
      this.category = category;
      this.$store.dispatch("fetchProducts", data);      

    },
    async selectByBrand(brand){
       const result = await (await axios.get(`http://localhost:5000/api/v1/products/?category=${this.category}`)).data;
       const data = result.data.filter((item)=>{
           return item.brand === brand;
       })
      this.isDiv=true;
      this.$store.dispatch("fetchProducts", data).then;
      

    },
    
  },
  computed: {
    ...mapGetters({
      productList: "productList",
    }),
     ...mapGetters({
        user: "user",
      }),
      ...mapGetters({
        categoryList: "categoryList"
      }),
        ...mapGetters({
        brandList: "brandList"
      }),
  }
};
</script>




 