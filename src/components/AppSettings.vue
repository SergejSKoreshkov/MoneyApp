<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>
                App settings
                <v-spacer></v-spacer>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
    </v-container>
</template>

<script>

export default {
  name: 'AppSettings'
}
</script>
