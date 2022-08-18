import create from "zustand";
import aziz from "../assets/images/aziz.jpg";
import abror from "../assets/images/abror.jpg";
import feruz from "../assets/images/feruz.jpg";
import muslim from "../assets/images/muslim.jpg";
import dilyor from "../assets/images/dilyor.jpg";
import hislat from "../assets/images/hislat.jpg";
import yulduz from "../assets/images/yulduz.jpg";
import malika from "../assets/images/malika.jpg";
import oydina from "../assets/images/oydina.jpg";
import mohlar from "../assets/images/oydina.jpg";
import muslimTwo from "../assets/images/muslim-two.jpg";

const initialArray = [
  {
    id: "1",
    img: `${aziz}`,
    name: "Azizbek",
    lastname: "Rakhimjonov",
    bandscore: "7.0",
    listening: "9.0",
    reading: "7.0",
    writing: "6.5",
    speaking: "6.0",
  },
  {
    id: "2",
    img: `${abror}`,
    name: "Abrorjon",
    lastname: "Esanboyev",
    bandscore: "7.0",
    listening: "7.5",
    reading: "7.0",
    writing: "6.5",
    speaking: "6.5",
  },
  {
    id: "3",
    img: `${feruz}`,
    name: "Feruzbek",
    lastname: "Ergashaliyev",
    bandscore: "7.5",
    listening: "8.0",
    reading: "9.0",
    writing: "6.5",
    speaking: "6.5",
  },
  {
    id: "4",
    img: `${muslim}`,
    name: "Muslimjon",
    lastname: "Urmanov",
    bandscore: "7.5",
    listening: "8.5",
    reading: "7.5",
    writing: "6.5",
    speaking: "6.5",
  },
  {
    id: "5",
    img: `${dilyor}`,
    name: "Dilyorbek",
    lastname: "Nematjonov",
    bandscore: "7.0",
    listening: "7.5",
    reading: "7.0",
    writing: "6.0",
    speaking: "7.0",
  },
  {
    id: "6",
    img: `${hislat}`,
    name: "Khislatbek",
    lastname: "Tukhtasinov",
    bandscore: "8.0",
    listening: "8.5",
    reading: "7.5",
    writing: "7.0",
    speaking: "8.0",
  },
  {
    id: "7",
    img: `${yulduz}`,
    name: "Yulduz",
    lastname: "Tursunboyeva",
    bandscore: "7.0",
    listening: "6.0",
    reading: "7.0",
    writing: "7.0",
    speaking: "7.0",
  },
  {
    id: "8",
    img: `${malika}`,
    name: "Malika",
    lastname: "Sotivoldieva",
    bandscore: "8.0",
    listening: "8.5",
    reading: "6.5",
    writing: "8.5",
    speaking: "7.5",
  },
  {
    id: "9",
    img: `${oydina}`,
    name: "Odinakhon",
    lastname: "Khayitboeva",
    bandscore: "7.0",
    listening: "8.5",
    reading: "7.0",
    writing: "6.0",
    speaking: "7.0",
  },
  {
    id: "10",
    img: `${mohlar}`,
    name: "Mokhlaroyim",
    lastname: "Turdalieva",
    bandscore: "6.5",
    listening: "7.5",
    reading: "6.5",
    writing: "6.5",
    speaking: "6.0",
  },
  {
    id: "11",
    img: `${muslimTwo}`,
    name: "Muslimjon",
    lastname: "Makhammadjonov",
    bandscore: "7.0",
    listening: "8.5",
    reading: "7.5",
    writing: "5.5",
    speaking: "6.5",
  },
];

const useIelts = create((set) => ({
  ielts: initialArray,
}))

export default useIelts;