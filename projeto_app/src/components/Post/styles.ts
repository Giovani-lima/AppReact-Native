import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400, // Altura da imagem da postagem
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  actionButton: {
    marginRight: 20,
  },
  interactionCount: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  interactionText: {
    fontSize: 14,
    color: themes.colors.black,
  },
});
