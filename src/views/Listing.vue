

   

    <template>
  <section>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
     <div style="display:flex; justify-content:center;">
      <span class="h6-hover" style="border-left:1px solid gray;border-right:1px solid gray;" v-for="category in categoryList" :key="category.id">
        <v-btn style="font-size:14px;margin:20px;text-decoration:none;color:black;font-weight:bold" @click.prevent="selectByCategory(category.name)">{{category.name}}</v-btn>
      </span>
    </div>
    
    <hr style="border-top: 1px solid gray; margin-top: 0px; ">
        <div style="display:flex;flex-wrap:wrap;width:1200px;margin-left:40px;" class="card-deck">

            <div v-show="isDiv" class="card" style="flex:0 0 22.333333%;display:flex; flex-direction:column;padding:10px 80px 10px 50px ">
              <span style="font:weight:bold;font-size:20px;margin-left:-80px"  >Filter By Brand :</span>
      <span v-for="brand in brandList" :key="brand.id">
        <v-btn style="font-size:14px;margin:20px;text-decoration:none;color:black;font-weight:bold" @click.prevent="selectByBrand(brand.name)">{{brand.name}}</v-btn>
      </span>
    </div>
            <div style="flex:0 0 22.333333%;" class="card" v-for="product in productList" :key="product._id">
            <ProductCard  :product="product" />  
            </div>         
        </div>
  </section>
</template>

<style>
 .h6-hover{
   padding: 40px;
 }
 .h6-hover:hover{
   background-color: rgb(218, 218, 218);
 }
</style>


<script>
import { mapGetters } from "vuex";
import apiRequest from "../utility/apiRequest";
import ProductCard from "./ProductCard.vue";
export default {
  components:{
    ProductCard,
    
  },
  data(){
    return{
      isDiv: false,
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
       const result = await apiRequest.getProductList();
       const data = result.filter((item)=>{
         return item.category === category;
         
       })
      this.isDiv=true;
      this.$store.dispatch("fetchProducts", data);
      

    },
    async selectByBrand(brand){
       const result = await apiRequest.getProductList();
       const data = result.filter((item)=>{
           return item.brand === brand;

         
       })
      this.isDiv=true;
      this.$store.dispatch("fetchProducts", data);
      

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




 