import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';
import AddNumbers from './AddNumbers';
import TwoSum from './TwoSum';

const NavbarChallenge = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedView, setSelectedView] = useState<string | null>(null);

  const slideAnim = useRef(new Animated.Value(-250)).current;

  const openMenu = () => {
    setMenuOpen(true);
    setSearchMode(false);
  };

  const enterSearchMode = () => {
    setSearchMode(true);
  };

  const closeSearch = () => {
    setMenuOpen(false);
    setSearchMode(false);
    setSearchText('');
  };

  const handleMenuSelect = (view: string) => {
    setSelectedView(view);
    setMenuOpen(false); // Optional: close the menu after selecting
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? 0 : -500,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [menuOpen, slideAnim]);

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        {!menuOpen && (
          <TouchableOpacity onPress={openMenu}>
            <Text style={styles.icon}>☰</Text>
          </TouchableOpacity>
        )}

        {menuOpen && <Text style={styles.title}>Menu</Text>}

        <View style={styles.rightSection}>
          {menuOpen && (
            <View style={styles.searchContainer}>
              {menuOpen && searchMode && (
                <TextInput
                  style={styles.searchInput}
                  value={searchText}
                  onChangeText={setSearchText}
                  placeholder="Search"
                  placeholderTextColor="#666"
                />
              )}
              {!searchMode && (
                <TouchableOpacity onPress={enterSearchMode}>
                  <Text style={styles.icon}>🔎</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={closeSearch}>
                <Text style={styles.closeIcon}>✖</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Slide Menu */}
      <Animated.View
        style={[
          styles.menuListContainer,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <TouchableOpacity onPress={() => handleMenuSelect('addNumbers')}>
          <Text
            style={[
              styles.menuItem,
              selectedView === 'addNumbers' && styles.menuItemSelected,
            ]}
          >
            Add Numbers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleMenuSelect('twoSum')}>
          <Text
            style={[
              styles.menuItem,
              selectedView === 'twoSum' && styles.menuItemSelected,
            ]}
          >
            Two Sum
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Content View */}
      <View style={styles.contentContainer}>
        {selectedView === 'addNumbers' && <AddNumbers />}
        {selectedView === 'twoSum' && <TwoSum />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    height: 56,
    zIndex: 1,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
    marginTop: 4,
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 4,
    fontSize: 28,
    color: '#fff',
  },
  title: {
    marginRight: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  rightSection: {
    marginLeft: 'auto',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    height: 36,
    width: Platform.OS === 'android' ? '86%' : '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 8,
    color: '#000',
  },
  menuListContainer: {
    position: 'absolute',
    top: 56,
    left: 0,
    backgroundColor: '#fff',
    paddingVertical: 20,
    width: 500,
    height: '100%',
    zIndex: 2,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 12,
    color: '#333',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  menuItemSelected: {
    backgroundColor: '#b8dfff',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  contentText: {
    fontSize: 20,
    color: '#444',
  },
});

export default NavbarChallenge;
