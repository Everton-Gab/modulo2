// Importa componente de imagem otimizado da biblioteca Expo
import { Image } from 'expo-image';

// Importa componentes básicos do React Native para estrutura visual e interação
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Importa o roteador para navegação entre telas
import { router } from 'expo-router';

// Importa ThemedText para exibir textos que respeitam o tema atual do app (claro/escuro)
// Ideal para usar em títulos ou textos importantes que devem seguir o estilo global
import { ThemedText } from '@/components/ThemedText';
{/* import Select from '@/components/TouchableComponent'; */}

// Componente principal da tela inicial (HomeScreen)
export default function HomeScreen() {
    return (
        // ScrollView com rolagem vertical e layout flexível
        <ScrollView contentContainerStyle={styles.container}>

            {/* Banner ou imagem no topo da tela */}
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.banner}
            />

            {/*<Select touchableText="Select a country" />*/}
            {/*<Select touchableText="Select a state" />*/}

            {/* Título principal da tela (usando ThemedText para respeitar o tema) */}
            <ThemedText type="title" style={styles.title}>HOME</ThemedText>

            {/* Botão para navegar para a tela "Modulo2" */}
            <Pressable onPress={() => router.push('/modulo2')} style={styles.button}>
                <Text style={styles.buttonText}>Ir para o Modulo 2</Text>
            </Pressable>

            {/* Botão para navegar para a tela "Explore" */}
            <Pressable onPress={() => router.push('/explore')} style={styles.button}>
                <Text style={styles.buttonText}>Explorar</Text>
            </Pressable>

            {/* Rodapé com informações de versão */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Version 1.0.0</Text>
            </View>
        </ScrollView>
    );
}

// Definições de estilos da tela
const styles = StyleSheet.create({
    // Container principal da tela
    container: {
        flexGrow: 1,                // Faz com que o conteúdo do ScrollView ocupe toda a altura disponível
        justifyContent: 'center',   // Centraliza verticalmente o conteúdo
        alignItems: 'center',       // Centraliza horizontalmente o conteúdo
        padding: 20,                // Espaçamento interno (padding)
        backgroundColor: '#f9f9f9', // Cor de fundo cinza claro
    },

    // Estilo da imagem do banner
    banner: {
        width: 200,                 // Largura fixa da imagem (200 pixels)
        height: 150,                // Altura fixa da imagem (150 pixels)
        resizeMode: 'contain',      // Garante que a imagem seja redimensionada para caber sem corte
        marginBottom: 20,           // Espaço abaixo da imagem
    },

    // Estilo do título principal (utilizado com ThemedText)
    title: {
        fontSize: 28,               // Tamanho de fonte grande
        marginBottom: 20,           // Espaço abaixo do título
        fontWeight: 'bold',         // Texto em negrito
        textAlign: 'center',        // Centraliza o texto horizontalmente
    },

    // Estilo dos botões de navegação
    button: {
        backgroundColor: '#0a5ca8', // Cor de fundo azul
        paddingVertical: 12,        // Espaçamento vertical (acima e abaixo)
        paddingHorizontal: 20,      // Espaçamento horizontal (esquerda e direita)
        borderRadius: 8,            // Bordas arredondadas
        alignItems: 'center',       // Centraliza o texto dentro do botão
        marginBottom: 16,           // Espaço abaixo de cada botão
        width: '80%',               // Largura do botão: 80% da largura da tela/container
    },

    // Estilo do texto dentro dos botões
    buttonText: {
        color: 'white',             // Cor do texto: branco
        fontWeight: 'bold',         // Texto em negrito
        fontSize: 16,               // Tamanho médio-grande da fonte
    },

    // Estilo do container do rodapé
    footer: {
        marginTop: 40,              // Espaço acima do rodapé
    },

    // Estilo do texto do rodapé
    footerText: {
        color: '#777',              // Cor do texto: cinza médio
        fontSize: 14,               // Tamanho pequeno da fonte
    },
});