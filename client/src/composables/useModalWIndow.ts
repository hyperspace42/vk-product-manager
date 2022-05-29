import { ref, Ref } from 'vue';

const useModalWindow = function () {
  const modalWindowOpened: Ref<boolean> = ref(false);

  const openModalWindow = function () {
    modalWindowOpened.value = true;
  };

  const closeModalWindow = function () {
    modalWindowOpened.value = false;
  };

  return { modalWindowOpened, openModalWindow, closeModalWindow };
};

export default useModalWindow;
