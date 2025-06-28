import { Stack } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

type Usuario = {
    id: number;
    name: string;
};

export default function Modulo3() {
    const [carregando, setCarregando] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [visivel, setVisivel] = useState(false);

    const carregarUsuarios = async () => {
        if (visivel) {
            setVisivel(false);
            return;
        }

        setCarregando(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsuarios(data);
            setVisivel(true);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <>
            <Stack.Screen options={{ title: 'Módulo 3 - Lista de Usuários' }} />

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Lista de Usuários</Text>

                <Pressable style={styles.button} onPress={carregarUsuarios}>
                    <Text style={styles.buttonText}>
                        {visivel ? 'Esconder Usuários' : 'Carregar Usuários'}
                    </Text>
                </Pressable>

                {carregando && (
                    <ActivityIndicator size="small" color="black" style={{ marginVertical: 100 }} />
                )}

                {visivel &&
                    usuarios.map((usuario) => (
                        <Text key={usuario.id} style={styles.usuario}>
                            {usuario.name}
                        </Text>
                    ))}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Módulo 3 - React Native</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0a5ca8',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    usuario: {
        fontSize: 16,
        paddingVertical: 4,
    },
    footer: {
        marginTop: 40,
    },
    footerText: {
        color: '#777',
        fontSize: 14,
    },
});
