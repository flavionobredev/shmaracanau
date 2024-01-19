<!-- // https://codesandbox.io/p/sandbox/vue-advanced-cropper-composition-api-5z0ww0?file=%2Fsrc%2FApp.vue%3A1%2C1-17%2C12 -->
<script setup lang="ts">
import { createTextVNode } from "vue";
import {
  Cropper,
  Preview,
  CircleStencil,
  type CropperResult,
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const FINAL_IMAGE_SIZE = 1080;
const ROUNDED_PERCENT_SIZE = 0.75;

const image = ref({
  // src: "",
  src: "https://scontent.cdninstagram.com/v/t39.30808-6/419719520_18121985164330150_3492284965720068883_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=yU65OZU9GwwAX_lfx_X&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI4MTU4NzM4MzY5ODA1ODAyNw%3D%3D.2-ccb7-5&oh=00_AfDQtpU8ZmjPve7c5C7wi_F59L50Tr7ZzU8Z6QYIEORteA&oe=65ADB690&_nc_sid=10d13b",
  // src: "https://instagram.ffor27-1.fna.fbcdn.net/v/t39.30808-6/376555958_18283398628178839_2985789906097357351_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2My5zZHIifQ&_nc_ht=instagram.ffor27-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=EeVi-FwiM1MAX8AgqQs&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE4NzU2OTk5MTQxMDk2Nzk0NA%3D%3D.2-ccb7-5&oh=00_AfCYbShSDGPvNxxxMajCDA5wzgmKIjVHGgP0ZwjX92Z5bw&oe=65ADB714&_nc_sid=b41fef",
});

const cropper = ref();
const preview = ref();
const file = ref();

const result = ref<{
  coordinates: any;
  image: any;
  canvas: HTMLCanvasElement;
  reset: () => void;
}>({
  coordinates: null,
  image: null,
  canvas: {} as HTMLCanvasElement,
  reset: () => {
    result.value.coordinates = null;
    result.value.image = null;
    result.value.canvas = {} as HTMLCanvasElement;
  },
});

const onChange = (data: any) => {
  const { coordinates, canvas, image } = data;
  result.value.reset();
  result.value.coordinates = coordinates;
  result.value.image = image;
  result.value.canvas = canvas;
};

const uploadImage = (event: any) => {
  const { files } = event.target;
  if (files && files[0]) {
    if (image.value.src) {
      URL.revokeObjectURL(image.value.src);
    }
    const blob = URL.createObjectURL(files[0]);
    image.value.src = blob;
  }
};

const download = () => {
  if (!cropper.value) return;
  const { canvas } = cropper.value.getResult() as CropperResult;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const newCanvas = document.createElement("canvas");
    newCanvas.width = FINAL_IMAGE_SIZE;
    newCanvas.height = FINAL_IMAGE_SIZE;

    const newCtx = newCanvas.getContext("2d");
    if (!newCtx) return;

    /* tamanho diminuido 75% da imagem desejada (p/ caber no circulo) */
    const roundedOverlayImageSize = FINAL_IMAGE_SIZE * ROUNDED_PERCENT_SIZE;

    /* offset para posicionar imagem recortada no novo canva */
    const offsetX = (newCanvas.width - roundedOverlayImageSize) / 2;
    const offsetY = (newCanvas.height - roundedOverlayImageSize) / 2;

    newCtx.drawImage(
      canvas,
      offsetX,
      offsetY,
      roundedOverlayImageSize,
      roundedOverlayImageSize
    );

    const overlay = new Image();
    overlay.src = new URL(
      "../../assets/images/tools/renascer-overlay.png",
      import.meta.url
    ).href;

    newCtx.drawImage(overlay, 0, 0, FINAL_IMAGE_SIZE, FINAL_IMAGE_SIZE);
    const link = document.createElement("a");

    link.download = "image.png";
    link.href = newCanvas.toDataURL();
    link.click();
  }
};

const reset = () => {
  if (image.value.src) {
    URL.revokeObjectURL(image.value.src);
  }
  image.value.src = "";
  result.value.reset();
  if (file.value) file.value.value = "";
  if (preview.value) preview.value.refresh();
};

onUnmounted(() => {
  if (image.value.src) {
    URL.revokeObjectURL(image.value.src);
  }
});
</script>
<template>
  <header>
    <h1>Renascer... Eu vou!</h1>
    <h2>Personalize sua foto de perfil</h2>
  </header>
  <section class="flex flex-col md:flex-row justify-center gap-10">
    <div
      class="mx-auto w-[80svw] min-h-[200px] md:mx-0 md:min-h-[none] md:h-[350px] md:w-[350px]"
    >
      <Cropper
        ref="cropper"
        :src="image.src"
        :stencilComponent="CircleStencil"
        :canvas="{
          width: FINAL_IMAGE_SIZE,
          height: FINAL_IMAGE_SIZE,
        }"
        defaultBoundaries="fit"
        class="!max-h-[300px] md:!max-h-[350px] md:!max-w-[350px]"
        @change="onChange"
      />
      <div
        v-if="!result.canvas.toDataURL"
        class="h-[200px] md:h-[350px] flex items-center justify-center bg-[#ffffff10]"
      >
        <p class="text-center text-white font-bold">
          Selecione uma foto para começar
        </p>
      </div>

      <button
        class="w-full mt-3 bg-white text-[#e84411] rounded py-3 px-6 font-extrabold"
        @click="file.click()"
      >
        Selecionar Foto
      </button>
      <button
        v-if="!!result.canvas.toDataURL"
        class="w-full mt-3 bg-[#ff7a52] text-white rounded py-3 px-6 font-extrabold"
        @click="reset"
      >
        Remover Foto
      </button>
      <input
        class="invisible hidden"
        type="file"
        ref="file"
        @change="uploadImage"
        accept="image/*"
      />
    </div>
    <div class="mx-auto w-[80svw] md:mx-0 md:w-[350px] md:h-[350px]">
      <div class="w-[80svw] md:w-[350px] md:h-[350px]">
        <div class="relative">
          <img
            v-if="result.canvas.toDataURL"
            :src="result.canvas.toDataURL()"
            :class="`absolute w-[${ROUNDED_PERCENT_SIZE * 100}%] h-[${
              ROUNDED_PERCENT_SIZE * 100
            }%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`"
          />
          <img
            src="../../assets/images/tools/renascer-overlay.png"
            class="relative top-0 left-0"
          />
          <span
            v-if="!result.canvas.toDataURL"
            class="w-[80svw] h-[300px] md:w-[350px] md:h-[350px] bg-[#00000050] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <p
            v-if="!result.canvas.toDataURL"
            class="text-white text-center italic text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Visualização
          </p>
        </div>
      </div>
      <button
        v-if="!!result.canvas.toDataURL"
        class="w-full mt-3 bg-white text-[#e84411] rounded py-3 px-6 font-extrabold"
        @click="download"
      >
        Baixar Imagem
      </button>
    </div>
  </section>
</template>
<style scoped></style>
