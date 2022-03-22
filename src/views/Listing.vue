

   

    <template>
  <section>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
    </v-alert>
     <div style="display:flex; justify-content:center;">
      <span class="h6-hover" style="border-left:1px solid gray;border-right:1px solid gray;" v-for="category in categoryList" :key="category.id">
        <router-link style="font-size:14px;margin:20px;text-decoration:none;color:black;font-weight:bold" to="/admin/products">{{category.name}}</router-link>
      </span>
    </div>
    <hr style="border-top: 1px solid gray; margin-top: 0px; ">
    <div >
        <div style="display:flex;flex-wrap:wrap;width:1200px;margin-left:40px;" class="card-deck">
            <div style="flex:1 0 24.333333%;" class="card" v-for="product in productList" :key="product._id">
            <ProductCard  :product="product" />  
            </div>         
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
  created() {
    this.fetchCategories();
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      
      this.$isLoading(true) // show the loading screen
      const result = await apiRequest.getProductList();
      this.$store.dispatch("fetchProducts", result).finally(()=>{
              this.$isLoading(false)
      });
    },
    async fetchCategories(){
      const result = await apiRequest.getCategoryList();
      this.$store.dispatch("fetchCategories", result);
                
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
  }
};
</script>




 