<template>
<div class="contenedor">
    <div class="row">
        <div class="col">
            <p>Esta herramienta permite generar un nuevo <b>atlas</b> a partir de un conjunto de imágenes seleccionadas,
            o cargar un <b>atlas existente</b> para su visualización. </p>
        </div>
    </div>

    <div class="row border-top">
        <div class="col-2 text-center pt-2">
            <Button label="Subir Sprites"  severity="contrast" icon="pi pi-images"  class="m-1" raised />
        </div>

        <div class="col pt-2">
            <p>
                Al apretar este botón se presentará un formulario en el cual será posible seleccionar todas las imágenes a incluir
                pudiendo visualizar las mismas en una grilla y asignar el name correspondiente con el cual luego podrán ser referenciadas.
            </p>
        </div>
    </div>

    <div class="row border-top">
        <div class="col-2 text-center pt-2">
            <Button label="Subir Atlas" severity="contrast" icon="pi pi-image"  class="m-1" raised />
        </div>

        <div class="col pt-2">
            <p>
                Al apretar este botón se presentará un formulario en el cual deberá seleccionar tanto la imagen del atlas como
                el propio archivo .atlas.
            </p>
        </div>
    </div>

    <div class="row border-top">
        <div class="col-2 text-center pt-2">
            <Button label="Descargar Atlas" severity="success" icon="pi pi-download"  class="m-1" raised />
        </div>

        <div class="col pt-2">
            <p>
                Al apretar este botón se podrá descargar tanto el .atlas así como la imagen generada.
            </p>
        </div>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.contenedor {
    max-width: 75vw;
}
</style>