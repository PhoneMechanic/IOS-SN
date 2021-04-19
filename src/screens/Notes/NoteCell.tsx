import {
  BottomSheet,
  BottomSheetSectionType,
  useBottomSheet,
} from '@Components/BottomSheet';
import { CollectionSort, isNullOrUndefined, SNNote } from '@standardnotes/snjs';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ActionSection, useNoteActionSections } from './helpers';
import {
  Container,
  DeletedText,
  DetailsText,
  NoteText,
  TitleText,
  TouchableContainer,
} from './NoteCell.styled';
import { NoteCellFlags } from './NoteCellFlags';

type Props = {
  note: SNNote;
  highlighted?: boolean;
  onPressItem: (noteUuid: SNNote['uuid']) => void;
  hideDates: boolean;
  hidePreviews: boolean;
  sortType: CollectionSort;
};

export const NoteCell = ({
  note,
  onPressItem,
  highlighted,
  sortType,
  hideDates,
  hidePreviews,
}: Props) => {
  // State
  const [selected, setSelected] = useState(false);
  const getActionSections = useNoteActionSections(note);

  const [
    bottomSheetTitle,
    bottomSheetSections,
    bottomSheetVisible,
    setBottomSheetSections,
    presentBottomSheet,
    dismissBottomSheet,
  ] = useBottomSheet();

  // Ref
  const selectionTimeout = useRef<number>();
  const elementRef = useRef<View>(null);

  const highlight = Boolean(selected || highlighted);

  const _onPress = () => {
    setSelected(true);
    onPressItem(note.uuid);
    setSelected(false);
  };

  const _onPressIn = () => {
    // Debounce
    const delay = 25;
    selectionTimeout.current = setTimeout(() => {
      setSelected(true);
    }, delay);
  };

  const _onPressOut = () => {
    if (selectionTimeout.current) {
      clearTimeout(selectionTimeout.current);
    }
    setSelected(false);
  };

  useEffect(() => {
    const sections: BottomSheetSectionType[] = [
      ...getActionSections(ActionSection.History),
      ...getActionSections(ActionSection.CommonActions),
      ...getActionSections(ActionSection.Listed),
    ];
    setBottomSheetSections(sections);
  }, [getActionSections, setBottomSheetSections]);

  const onLongPress = () => {
    if (note.errorDecrypting) {
      return;
    }

    const title = note.protected ? note.safeTitle() : note.title;
    presentBottomSheet(title);
  };

  const padding = 14;
  const showPreview = !hidePreviews && !note.protected && !note.hidePreview;
  const hasPlainPreview =
    !isNullOrUndefined(note.preview_plain) && note.preview_plain.length > 0;
  const showDetails = !note.errorDecrypting && (!hideDates || note.protected);

  return (
    <>
      <TouchableContainer
        onPress={_onPress}
        onPressIn={_onPressIn}
        onPressOut={_onPressOut}
        onLongPress={onLongPress}
      >
        <Container
          ref={elementRef as any}
          selected={highlight}
          padding={padding}
        >
          {note.deleted && <DeletedText>Deleting...</DeletedText>}

          <NoteCellFlags note={note} highlight={highlight} />

          {note.errorDecrypting && !note.waitingForKey && (
            <NoteText selected={highlight} numberOfLines={2}>
              {'Please sign in to restore your decryption keys and notes.'}
            </NoteText>
          )}

          {note.safeTitle().length > 0 && (
            <TitleText selected={highlight}>{note.title}</TitleText>
          )}

          {hasPlainPreview && showPreview && (
            <NoteText selected={highlight} numberOfLines={2}>
              {note.preview_plain}
            </NoteText>
          )}

          {!hasPlainPreview && showPreview && note.safeText().length > 0 && (
            <NoteText selected={highlight} numberOfLines={2}>
              {note.text}
            </NoteText>
          )}

          {showDetails && (
            <DetailsText
              numberOfLines={1}
              selected={highlight}
              first={!note.title}
            >
              {note.protected && (
                <Text>
                  Protected
                  {!hideDates && ' • '}
                </Text>
              )}
              {!hideDates && (
                <Text>
                  {sortType === CollectionSort.UpdatedAt
                    ? 'Modified ' + note.updatedAtString
                    : note.createdAtString}
                </Text>
              )}
            </DetailsText>
          )}
        </Container>
      </TouchableContainer>
      <BottomSheet
        title={bottomSheetTitle}
        sections={bottomSheetSections}
        visible={bottomSheetVisible}
        onDismiss={dismissBottomSheet}
      />
    </>
  );
};
