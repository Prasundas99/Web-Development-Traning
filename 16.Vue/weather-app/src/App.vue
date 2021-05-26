<template>
<Style />
<Weather />
</template>
  

<script>
//importing style
import Style from './components/Styles' 
//importing components
import Weather from './components/Weather'
export default {
  name: "app",
    components: {
    Weather,
    Style
  }
}

</script>

