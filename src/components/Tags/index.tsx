import React, { FC, useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { v4 as uuid } from 'uuid';
import image from '../../functions/image';
import styles from './styles';

interface Props {
    title: string;
    defaultValue: string[];
    editable: boolean;
    onValueChange: (val: string[]) => void;
}

const Tags: FC<Props> = ({ title, defaultValue, editable, onValueChange }) => {
    const [tags, setTags] = useState<string[]>([]);
    const tagInputRef = useRef<TextInput>(null);

    useEffect(() => {
        setTags(defaultValue || []);
    }, []);

    return (
        <View style={styles.tagsContainer}>
            <Text style={styles.tagsTitle}>{title}</Text>
            <View style={styles.tagsContent}>
                {tags.map(
                    (tag: string, i: number): JSX.Element => (
                        <View key={uuid()} style={styles.tag}>
                            <TextInput
                                editable={false}
                                defaultValue={tag}
                                style={[styles.tagName, !editable && styles.tagNameHidden]}
                            />
                            <TouchableOpacity
                                style={editable ? styles.closeContainer : styles.hidden}
                                onPress={() => {
                                    const tempTags = { ...tags };
                                    tempTags.splice(i, 1);
                                    setTags(tempTags);
                                    onValueChange(tempTags);
                                }}>
                                <Image
                                    source={image.miscellaneous.close}
                                    style={styles.closeImage}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                )}
                <View style={editable ? styles.tag : styles.hidden}>
                    <TextInput
                        ref={tagInputRef}
                        placeholder="..."
                        style={styles.tagName}
                        onEndEditing={e => {
                            if (tagInputRef.current && e.nativeEvent.text) {
                                tagInputRef.current.setNativeProps({ text: '' });
                                onValueChange([...tags, e.nativeEvent.text]);
                                setTags([...tags, e.nativeEvent.text]);
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Tags;
