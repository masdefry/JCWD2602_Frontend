1. Teknologi yang biasanya digunakan untuk mendefinisikan struktur dan konten dari halaman web adalah?
a. ReactJS
x. HTML
c. CSS
d. Javascript

2. Apa yang biasanya digunakan untuk memberikan interaksi pada halaman web?
x. Javascript
b. HTML5
c. CSS
d. Tailwind CSS

3. Apakah yang dimaksud dengan "pseudo-element" dalam CSS, dan bagaimana cara mereka digunakan?
x. Pseudo-element adalah elemen yang muncul setelah elemen yang dipilih dalam CSS dan digunakan untuk styling spesifik.
b. Pseudo-element adalah elemen yang hanya muncul setelah elemen di hover, dan efek aktif pada elemen tersebut.
c. Pseudo-element adalah elemen yang hanya dapat diakses melalui JavaScript.
d. Tidak ada jawaban yang benar

4. Apa yang dimaksud dengan "CSS Flexbox" dan bagaimana cara digunakannya untuk mengatur tata letak elemen dalam halaman web?
x. CSS Flexbox adalah metode untuk mengatur tata letak elemen dalam satu dimensi (baris atau kolom) secara fleksibel.
b. CSS Flexbox adalah metode yang digunakan untuk memvalidasi form pada CSS.
c. CSS Flexbox adalah metode untuk mengatur gambar latar belakang dalam elemen HTML.
d. CSS Flexbox adalah metode untuk mengatur tata letak posisi element seperti fixed, sticky, dan absolute

5. Bagaimana Anda membuat komponen baru dalam React?
a. Dengan menggunakan `new Component()` di dalam fungsi `render`.
b. Dengan menambahkan metode `createComponent()` dalam komponen yang ada.
x. Dengan membuat file JavaScript baru dan menuliskan kode JSX untuk komponen tersebut.
d. Dengan menambahkan elemen HTML baru dalam file HTML yang menggambarkan komponen.

6. Apa yang dimaksud dengan "props drilling" dalam konteks React?
a. Props drilling adalah teknik atau metode untuk membuat props dalam React.
b. Props drilling adalah cara untuk mengatur prop data secara teratur dan efisien.
x. Props drilling adalah proses mengirimkan data props melalui beberapa lapisan komponen, yang dapat membuat kode menjadi tidak efisien.
d. Props drilling adalah metode untuk melakukan parsing props dari dalam komponen child kepada komponen parent pada React sehingga membuat kode lebih efisien.

7. Tools apa yang digunakan oleh React untuk mengkompilasi JSX?
a. React Router
b. Redux
c. Axios
x. Babel

8. Bagaimana Anda menggunakan useMemo dalam React untuk mengoptimalkan kinerja komponen yang mengambil data dari API eksternal?
x. useMemo digunakan untuk menghindari pengambilan ulang data dari API setiap kali komponen dirender ulang.
b. useMemo digunakan untuk mengambil data dari API setiap kali komponen dirender ulang secara efisien.
c. useMemo digunakan untuk mengatur tampilan komponen React.
d. useMemo tidak dapat digunakan untuk mengoptimalkan pengambilan data dari API.

9. Bagaimana komponen React berinteraksi dengan state yang dikelola oleh Redux?
x. Komponen React mengirimkan actions ke Redux, yang kemudian memperbarui state.
b. Komponen React dapat mengubah state dengan menggunakan setState pada Redux.
c. Komponen React tidak dapat berinteraksi dengan state Redux.
d. Komponen React mengirimkan Redux ke Reducers, yang kemudian memperbarui state.

10. Apa yang dimaksud dengan "Virtual DOM" dalam konteks React?
a. Sebuah elemen DOM yang digunakan untuk merender komponen dalam React.
x. Sebuah representasi sementara dari struktur DOM aktual yang digunakan oleh React untuk meningkatkan kinerja pembaruan tampilan.
c. Sebuah library dari JavaScript yang digunakan untuk memudahkan membuat interaksi berupa animasi virtual dalam React.
d. Sebuah jenis komponen dalam React yang digunakan untuk menggantikan struktur dalam bentuk komponen fungsional.

11. Apa yang dimaksud dengan Server-Side Rendering (SSR) dalam React, dan apa manfaatnya?
a. SSR adalah metode untuk mengatur state global dalam React.
x. SSR adalah metode untuk merender tampilan di sisi server sebelum dikirim ke klien, yang memungkinkan aplikasi lebih cepat dimuat dan SEO lebih baik.
c. SSR adalah metode untuk merender tampilan hanya di sisi klien sebelum dikirim ke server, yang memungkinkan aplikasi lebih cepat dimuat dan SEO lebih baik.
d. SSR adalah metode untuk merender hanya tampilan animasi dalam React sebelum dikirim ke server, yang memungkinkan aplikasi lebih cepat dimuat dan SEO lebih baik.

12. Manakah diantara pernyataan berikut yang benar terkait navigation pada suatu page di NextJs project?
a. Penggunaan Link dari next/link bersifat tidak baik untuk SEO performance, dikarenakan link perpindahan page tidak dapat dideteksi oleh crawler
x. Penggunaan Link dari next/link bersifat sangat baik untuk SEO performance, dikarenakan link perpindahan page dapat dideteksi oleh crawler dan memiliki behavior SPA
c. Router.push digunakan untuk perpindahan page ketika user melakukan event click, yang bersifat sangat baik untuk SEO performance karena link perpindahan page dapat dideteksi oleh crawler dan memiliki behavior SPA
d. Tidak ada pernyataan yang benar.

13. Apa fungsi utama dari createSlice dalam Redux Toolkit, dan mengapa ini berguna?
a. createSlice adalah metode untuk membuat instance “slice” atau Redux store yang membantu kerja reducer.
b. createSlice digunakan untuk membuat “slice” yang hanya mencakup actions pada redux dalam satu tempat.
x. createSlice digunakan untuk membuat "slice" yang mencakup reducer, action, dan pembaruan state dalam satu tempat.
d. Tidak ada jawaban yang benar.

14. Apa yang dimaksud dengan useRef dalam React?
a. useRef adalah hook dalam React yang digunakan untuk mengatur state komponen.
x. useRef adalah hook dalam React yang digunakan untuk mengakses dan memanipulasi elemen DOM.
c. useRef adalah hook dalam React yang digunakan untuk merubah “functional component” menjadi “class component”.
d. useRef adalah hook dalam React yang digunakan untuk membuat action dan memanipulasi state.

15. Berikut adalah sebuah functional component dalam React. Lengkapilah kode ini dengan cara yang benar untuk mengelola state dan menampilkan nilai state saat tombol ditekan.
/*
    import {useState} from 'react';

    export default function Counter(){
        <!-- Lengkapi Code Disini -->
       

        return(
            <>
                <p>Numbers: {/* Lengkapi Code Disini */}</p>
                <button onClick={/* Lengkapi Code Disini */}>Increment</button>
            </>
        )
    }
*/

a. Gunakan this.state untuk menginisialisasi state count dan this.setState untuk mengubah state saat tombol ditekan.
b. Gunakan state untuk menginisialisasi state count dan setState, dan gunakan setState untuk mengubah state saat tombol ditekan.
c. State tidak diperlukan dalam functional component.
x. Gunakan useState untuk menginisialisasi state count dan setCount, dan gunakan setCount untuk mengubah state saat tombol ditekan.

16. Anda memiliki sebuah functional component dalam React yang memiliki beberapa hooks.
/*
    import {useState, useEffect} from 'react';

    export default function Products(){
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            <!-- Lengkapi Code Disini -->
        }, [])

        return(
            <>
                <h1>
                    Lists Products
                </h1>
                {
                    loading?
                        'Loading...'
                    :
                        <!-- Lengkapi Code Disini -->
                }
            </>
        )
    }
*/
Apa yang harus dilengkapi pada code diatas?
a. Anda harus menginisialisasi data dan loading dengan data palsu sejak awal, dan kemudian mengubahnya saat data sebenarnya tiba.
b. Anda harus menambahkan dan membuat state baru di dalam useEffect untuk mengelola data dan loading, karena Anda tidak dapat menggunakan useState di luar return. Setelah itu lakukan permintaan HTTP langsung di dalam useEffect
c. Anda dapat langsung menggunakan data dan loading untuk menampilkan data di dalam UI tanpa perlu menggunakan useEffect.
x. Di dalam useEffect, Anda akan mengirim permintaan HTTP menggunakan fetch untuk mengambil data dari server dan mengisi “data” dengan response. Saat data diterima, Anda akan mengubah nilai loading menjadi false.

17. Anda ingin mengakses elemen DOM dalam komponen React Anda. Bagaimana Anda akan menggunakan useRef hook untuk mencapai ini?
/*
    import {useRef} from 'react';

    export default function Form(){
        const element = useRef()
        const handleClick = () => {
            ...
        }
        return(
            <>
                <h1 ref={element} style={{backgroundColor: 'white'}}>
                    Lists Products
                </h1>
                <button onClick={handleClick}>
                    Submit
                </button>
            </>
        )
    }
*/
a. Anda dapat menggunakan element.style.color = 'blue' dalam fungsi handleClick untuk mengubah warna latar belakang elemen div.
b. Anda dapat menggunakan element.style.backgroundColor = 'blue' dalam fungsi handleClick untuk mengubah warna latar belakang elemen div.
c. Anda dapat menggunakan element.current.style.color = 'blue' dalam fungsi handleClick untuk mengubah warna latar belakang elemen div.
x. Anda dapat menggunakan element.current.style.backgroundColor = 'blue' dalam fungsi handleClick untuk mengubah warna latar belakang elemen div.

18. Perhatikan code berikut!
/*
    const Component = ({selected = false}) => {
        return(
            <Icon color={selected? 'green':'black'} />
        )
    }
*/
Apa default color dari component Icon?
x. Black
b. Green
c. Tidak Ada Default Color 
d. Semua Jawaban Salah

19. Perhatikan code berikut ini! Berikut ini adalah lampiran code pada suatu project Next Js versi 14 dengan menggunakan app router.

/*
    import {useState} from 'react';

    export default function Profile(){
        const [data, setData] = useState(0)
        
        return(
            <div>
                <p>
                    {data}
                </p>
                <button onClick={() => setData(data+1)}>
                    Click Me!
                </button>
            </div>
        )
    }
*/

Apa yang salah pada code tersebut?
a. Harus men-define page sebagai server side dengan “use server”
x. Harus men-define page sebagai client side dengan “use client”
c. Penggunaan useState harus dibarengi dengan useEffect pada component tersebut.
d. Function yang terdapat pada onClick harus dibungkus dalam function tersendiri dan di inisiasi di atas sebelum pemanggilannya

20. Apa fungsi utama dari createSlice dalam Redux Toolkit, dan mengapa ini berguna?
a. createSlice adalah metode untuk membuat instance “slice” atau Redux store yang membantu kerja reducer.
b. createSlice digunakan untuk membuat “slice” yang hanya mencakup actions pada redux dalam satu tempat.
x. createSlice digunakan untuk membuat "slice" yang mencakup reducer, action, dan pembaruan state dalam satu tempat.
d. Tidak Ada Jawaban yang Benar

21. Apa itu "middleware" dalam Redux, dan bagaimana mereka digunakan?
x. Middleware adalah metode yang digunakan untuk memproses action sebelum mencapai reducer dalam Redux, seperti logging atau pengiriman data ke server.
b. Middleware adalah fungsi yang digunakan Redux untuk mengoptimalkan dalam merender tampilan component dalam React.
c. Middleware adalah komponen dalam Redux yang menghubungkan antara state dan komponen React secara efisien.
d. Middleware adalah metode untuk mengelola useState dalam Redux.

22. Mengapa useReducer sering digunakan dalam manajemen state daripada useState dalam situasi yang lebih kompleks?
a. useReducer lebih sederhana daripada useState dalam penerapan pembuatannya.
x. useReducer memisahkan pembaruan state dari komponen, memudahkan pengelolaan state yang kompleks.
c. useState memisahkan pembaruan state dari komponen, memudahkan pengelolaan state yang kompleks.
d. Tidak Ada Jawaban yang Benar

23. Bagaimana Anda melakukan parsing prop ke komponen lain dalam React?
x. Tidak mungkin melewatkan prop ke komponen dalam React.
b. Dengan menggunakan `class` untuk menginisialisasi prop di dalam komponen.
c. Dengan memasukkan prop langsung ke dalam markup HTML dalam komponen.
d. Dengan menyertakan prop sebagai atribut dalam elemen JSX saat Anda merender komponen.