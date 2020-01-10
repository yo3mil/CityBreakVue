<template>
    
        <ul class="list__all">
           
            <li v-for="cities in capitalsArray" class="list__item">
            
                <div class="list__item-temp">{{ cities.temperature + '°C'}}</div>
                <div class="list__item-location">
                    <a :href="`http://www.google.com/search?q=${cities.city}`">{{ `${cities.city}, ${cities.country}` }}</a>
                </div>
            
            </li>
        </ul>
    
</template>
<script>
export default {
    props: {
        capitalsArray: {
        type: Array,
        required: true
      }
    }
}
</script>

<style scoped lang="scss">
    a {
        text-decoration: none;
        color: white;
    }
    
 .list {
    &__all {
        width: 100%;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    
    &__item {
        
        margin: 1rem 1.5rem;
        min-width: 30rem;
        height: 5rem;
        border-radius: 100px;
        border: 1px solid rgb(177, 177, 177);
        background-color: rgba(0, 0, 0, .45);
        backdrop-filter: blur(2px);
        display: flex;
        padding: 0 4rem;
        align-items: center;
        &-temp {
            flex: 0 0 30%;
            font-size: 2rem;
            
        }
        &-location {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            margin-right: -1rem;
        }

    }

}
</style>