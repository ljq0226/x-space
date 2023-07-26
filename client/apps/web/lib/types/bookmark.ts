
export type Bookmark = {
  id: string;
  createdAt: any;
};

export const bookmarkConverter: any = {
  toFirestore(bookmark) {
    return { ...bookmark };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);

    return { ...data } as Bookmark;
  }
};
