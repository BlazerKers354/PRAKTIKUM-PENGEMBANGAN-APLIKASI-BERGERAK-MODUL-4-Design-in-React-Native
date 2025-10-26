import { FlatList, Image as RNImage, Modal as RNModal } from "react-native";
import { useState } from "react";
import {
    Box,
    VStack,
    Text,
    Heading,
    Pressable,
    ScrollView,
    HStack,
} from "@gluestack-ui/themed";
import Button from "../components/button";
import Separator from "../components/separator";

// Dummmy Data (Array of Object)
const datas = [
    {
        id: 1,
        title:
            "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 2,
        title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 3,
        title:
            "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 4,
        title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 5,
        title:
            "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 6,
        title:
            "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 7,
        title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
    },
    {
        id: 8,
        title:
            "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 9,
        title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 10,
        title:
            "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
        image:
            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
];

// Functional Component
const List = () => {
    // State untuk mengontrol Modal
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Arrow Function untuk membuka modal
    const openModal = (item) => {
        setSelectedArticle(item);
        setModalVisible(true);
    };

    // Arrow Function untuk menutup modal
    const closeModal = () => {
        setModalVisible(false);
        setSelectedArticle(null);
    };

    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => openModal(item)}>
                <Box 
                    p="$4" 
                    borderBottomWidth={1} 
                    borderBottomColor="$coolGray200"
                    bg="$white"
                    $hover={{
                        bg: "$coolGray50",
                    }}
                >
                    <VStack space="sm">
                        <Box borderRadius="$xl" overflow="hidden">
                            <RNImage
                                source={{ uri: item.image }}
                                style={{ 
                                    height: 200, 
                                    width: '100%', 
                                    resizeMode: 'cover' 
                                }}
                            />
                        </Box>
                        <Text 
                            size="lg" 
                            color="$coolGray900" 
                            fontWeight="$semibold"
                            lineHeight="$xl"
                            pt="$2"
                        >
                            {item.title}
                        </Text>
                    </VStack>
                </Box>
            </Pressable>
        );
    };

    return (
        <Box flex={1} bg="$white">
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            {/* Modal Component */}
            <RNModal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <Pressable 
                    flex={1}
                    bg="rgba(0, 0, 0, 0.6)"
                    justifyContent="center"
                    alignItems="center"
                    p="$5"
                    onPress={closeModal}
                >
                    <Pressable 
                        w="$full"
                        maxHeight="85%"
                        onPress={(e) => e.stopPropagation()}
                    >
                        <Box 
                            bg="$white" 
                            borderRadius="$xl"
                            overflow="hidden"
                            shadowColor="$black"
                            shadowOffset={{ width: 0, height: 4 }}
                            shadowOpacity={0.3}
                            shadowRadius={8}
                            elevation={8}
                        >
                            <Box 
                                bg="$primary500" 
                                p="$4"
                            >
                                <Heading size="md" color="$white">
                                    Detail Artikel
                                </Heading>
                            </Box>
                            
                            <ScrollView maxHeight="75%">
                                <Box p="$5">
                                    {selectedArticle && (
                                        <VStack space="md">
                                            <Box 
                                                borderRadius="$lg" 
                                                overflow="hidden"
                                            >
                                                <RNImage
                                                    source={{ uri: selectedArticle.image }}
                                                    style={{ 
                                                        height: 200, 
                                                        width: '100%',
                                                        resizeMode: 'cover'
                                                    }}
                                                />
                                            </Box>
                                            
                                            <Separator height={10} />
                                            
                                            <Heading size="lg" color="$coolGray900" lineHeight="$2xl">
                                                {selectedArticle.title}
                                            </Heading>
                                            
                                            <Box 
                                                bg="$primary50" 
                                                p="$3" 
                                                borderRadius="$md"
                                                borderLeftWidth={4}
                                                borderLeftColor="$primary500"
                                            >
                                                <Text 
                                                    size="sm" 
                                                    color="$primary700" 
                                                    fontWeight="$semibold"
                                                >
                                                    Artikel ID: {selectedArticle.id}
                                                </Text>
                                            </Box>
                                            
                                            <Text 
                                                size="md" 
                                                color="$coolGray700" 
                                                lineHeight="$xl"
                                            >
                                                Ini adalah detail dari artikel yang dipilih. Anda dapat
                                                menambahkan lebih banyak informasi di sini seperti
                                                deskripsi lengkap, tanggal publikasi, penulis, dan
                                                konten artikel lainnya.
                                            </Text>
                                            
                                            <Separator height={15} />
                                        </VStack>
                                    )}
                                </Box>
                            </ScrollView>
                            
                            <Box bg="$coolGray50" px="$5" py="$4">
                                <Button text="Tutup" onPress={closeModal} />
                            </Box>
                        </Box>
                    </Pressable>
                </Pressable>
            </RNModal>
        </Box>
    );
};

export default List;