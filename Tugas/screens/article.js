import { Alert, Image as RNImage } from "react-native";
import { 
    ScrollView, 
    Box, 
    VStack, 
    Text, 
    Heading, 
    Divider,
} from "@gluestack-ui/themed";
import Separator from "../components/separator";
import Button from "../components/button";

// Functional Component
const Article = () => {
    // Arrow Function
    const buttonHandler = () => {
        Alert.alert("Button Handler");
    };

    return (
        <ScrollView bg="$white">
            <VStack space="md">
                <Box alignItems="center" py="$4" px="$4">
                    <Box w="80%" h={100}>
                        <RNImage
                            source={{
                                uri: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/logo-telkom-university-surabaya-color-300x133.png?lossy=2&strip=1&webp=1",
                            }}
                            style={{ height: 100, width: '100%', resizeMode: 'contain' }}
                        />
                    </Box>
                </Box>
                
                <Box bg="$coolGray100" px="$4" py="$5">
                    <Heading size="xl" color="$coolGray900" lineHeight="$2xl">
                        Solusi Inovatif Penurunan Angka Stunting, Mahasiswa Telkom University
                        Sabet Penghargaan di Innovillage 2023
                    </Heading>
                </Box>

                <VStack space="md" px="$4">
                    <Box borderRadius="$xl" overflow="hidden" h={220}>
                        <RNImage
                            source={{
                                uri: "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Innovillage-2023-1200x600.jpeg?lossy=2&strip=1&webp=1",
                            }}
                            style={{ 
                                height: 220, 
                                width: '100%', 
                                resizeMode: 'cover' 
                            }}
                        />
                    </Box>

                    <Separator height={10} />

                    <Text size="md" color="$coolGray800" lineHeight="$xl">
                        <Text fontWeight="$bold" color="$coolGray900">Surabaya, Maret 2024</Text>
                        {" "}- Gelombang kebanggaan kembali datang bagi Telkom University Surabaya,
                        tim mahasiswa Telkom University Surabaya yang menamakan diri mereka
                        Connect Care Pediatrics berhasil meraih prestasi gemilang dalam
                        kompetisi Innovillage 2023 yang diumumkan pada tanggal 09 Maret 2024,
                        bertempat di Auditorium Gedung Damar, Telkom University. Sebuah
                        kompetisi sosial project bergengsi ini diselenggarakan untuk mewadahi
                        mahasiswa untuk melakukan kegiatan sosial di tengah-tengah masyarakat
                        yang dapat mengatasi permasalahan yang dihadapi. Innovillage yang
                        telah memasuki tahun ketiga ini mengangkat tema "Empowering Young
                        Sociopreneur for National Development."
                    </Text>

                    <Text size="md" color="$coolGray800" lineHeight="$xl">
                        Melalui inovasi proyek berjudul "Pembuatan IoT dan Perancangan Website
                        'Connect Pediatrics' Untuk Monitoring Kesehatan Balita pada Posyandu",
                        tim yang digawangi oleh Rendy Adi Fatma Saputra, Daffa Fakhuddin
                        Arrozy, dan Johanes Abner Sebastian, bersama dengan dosen pembimbing
                        Eka Sari Oktarina S.Kom, M.Eng, berhasil menciptakan inovasi luar
                        biasa yang mendukung tujuan pembangunan berkelanjutan. Dan
                        mengantarkan mereka meraih predikat "Best Stunting Reduction
                        Solution".
                    </Text>

                    <Text size="md" color="$coolGray800" lineHeight="$xl">
                        "Proyek ini fokus pada penurunan angka stunting dengan menghadirkan
                        solusi inovatif berupa alat IoT yang terintegrasi dengan website. Alat
                        ini tidak hanya mengukur berat badan dan tinggi badan balita, tetapi
                        juga merekam data secara otomatis ke dalam database yang dapat diakses
                        oleh orang tua. Informasi ini juga mempermudah pekerjaan bidan di
                        Posyandu dalam penginputan data ke EPPGBM." jelas Rendy
                    </Text>

                    <Text size="md" color="$coolGray800" lineHeight="$xl">
                        Sementara itu, anggota tim lainnya berbagi pengalaman yang menurutnya
                        berkesan selama menjalankan proyek, "Program Innovillage ini seru dan
                        memotivasi. Kami banyak keluar dari zona nyaman, menerapkan materi
                        kuliah ke dalam kehidupan nyata masyarakat." Ujar Daffa, di tempat
                        yang sama Johanes menambahkan, "Kami belajar bagaimana berinteraksi
                        dengan masyarakat yang jarang terpapar teknologi, serta melihat
                        permasalahan dari sudut pandang baru."
                    </Text>

                    <Text size="md" color="$coolGray800" lineHeight="$xl">
                        Keberhasilan tim mahasiswa Connect Care Pediatrics ini bukan hanya
                        sekadar pencapaian dalam sebuah kompetisi, melainkan bukti nyata
                        kemampuan mereka dalam menerapkan pengetahuan dan keterampilan untuk
                        memecahkan permasalahan sehari-hari. Prestasi ini diharapkan menjadi
                        sumber inspirasi bagi mahasiswa lainnya untuk mengambil risiko,
                        menerapkan ilmu yang mereka pelajari, dan menjadi agen perubahan dalam
                        membangun bangsa.
                    </Text>

                    <Text size="md" color="$coolGray800" lineHeight="$xl">
                        Detail menarik dari proyek innovillage ini bisa langsung dilihat di
                        Instagram connectcare.pediatrics
                    </Text>

                    <Text size="md" fontWeight="$bold" color="$coolGray900">
                        Surabaya, Maret 2024
                    </Text>

                    <Divider bg="$coolGray300" />

                    <Separator height={10} />
                    
                    <Button text="Share" onPress={buttonHandler} />
                    
                    <Separator height={70} />
                </VStack>
            </VStack>
        </ScrollView>
    );
};

export default Article;