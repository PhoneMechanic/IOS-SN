import React from 'react-native';
import AccessibilityIcon from '../../icons/ic-accessibility.svg';
import AccountCircleIcon from '../../icons/ic-account-circle.svg';
import AddIcon from '../../icons/ic-add.svg';
import ArchiveIcon from '../../icons/ic-archive.svg';
import ArrowLeftIcon from '../../icons/ic-arrow-left.svg';
import ArrowsSortDownIcon from '../../icons/ic-arrows-sort-down.svg';
import ArrowsSortUpIcon from '../../icons/ic-arrows-sort-up.svg';
import AuthenticatorIcon from '../../icons/ic-authenticator.svg';
import CheckBoldIcon from '../../icons/ic-check-bold.svg';
import CheckCircleIcon from '../../icons/ic-check-circle.svg';
import CheckIcon from '../../icons/ic-check.svg';
import ChevronDownIcon from '../../icons/ic-chevron-down.svg';
import ChevronRightIcon from '../../icons/ic-chevron-right.svg';
import CloseIcon from '../../icons/ic-close.svg';
import CloudOffIcon from '../../icons/ic-cloud-off.svg';
import CodeIcon from '../../icons/ic-code.svg';
import CopyIcon from '../../icons/ic-copy.svg';
import DownloadIcon from '../../icons/ic-download.svg';
import EmailIcon from '../../icons/ic-email.svg';
import EyeOffIcon from '../../icons/ic-eye-off.svg';
import EyeIcon from '../../icons/ic-eye.svg';
import HashtagIcon from '../../icons/ic-hashtag.svg';
import HelpIcon from '../../icons/ic-help.svg';
import InfoIcon from '../../icons/ic-info.svg';
import KeyboardIcon from '../../icons/ic-keyboard.svg';
import LinkOffIcon from '../../icons/ic-link-off.svg';
import ListBulleted from '../../icons/ic-list-bulleted.svg';
import ListedIcon from '../../icons/ic-listed.svg';
import LockFilledIcon from '../../icons/ic-lock-filled.svg';
import LockIcon from '../../icons/ic-lock.svg';
import MarkdownIcon from '../../icons/ic-markdown.svg';
import MenuArrowDownAlt from '../../icons/ic-menu-arrow-down-alt.svg';
import MenuArrowDownIcon from '../../icons/ic-menu-arrow-down.svg';
import MenuArrowRight from '../../icons/ic-menu-arrow-right.svg';
import MenuCloseIcon from '../../icons/ic-menu-close.svg';
import MoreIcon from '../../icons/ic-more.svg';
import PencilOffIcon from '../../icons/ic-pencil-off.svg';
import PinFilledIcon from '../../icons/ic-pin-filled.svg';
import UnpinIcon from '../../icons/ic-pin-off.svg';
import PinIcon from '../../icons/ic-pin.svg';
import PremiumFeatureIcon from '../../icons/ic-premium-feature.svg';
import RestoreIcon from '../../icons/ic-restore.svg';
import SecurityIcon from '../../icons/ic-security.svg';
import ServerIcon from '../../icons/ic-server.svg';
import SettingsIcon from '../../icons/ic-settings.svg';
import SignInIcon from '../../icons/ic-signin.svg';
import SignOutIcon from '../../icons/ic-signout.svg';
import SpreadsheetsIcon from '../../icons/ic-spreadsheets.svg';
import StarIcon from '../../icons/ic-star.svg';
import SyncIcon from '../../icons/ic-sync.svg';
import TasksIcon from '../../icons/ic-tasks.svg';
import PlainTextIcon from '../../icons/ic-text-paragraph.svg';
import RichTextIcon from '../../icons/ic-text-rich.svg';
import PasswordIcon from '../../icons/ic-textbox-password.svg';
import ThemesIcon from '../../icons/ic-themes.svg';
import TrashFilledIcon from '../../icons/ic-trash-filled.svg';
import TrashSweepIcon from '../../icons/ic-trash-sweep.svg';
import TrashIcon from '../../icons/ic-trash.svg';
import TuneIcon from '../../icons/ic-tune.svg';
import UnarchiveIcon from '../../icons/ic-unarchive.svg';
import UserIcon from '../../icons/ic-user.svg';
import WindowIcon from '../../icons/ic-window.svg';

const ICONS = {
  'menu-arrow-down-alt': MenuArrowDownAlt,
  'menu-arrow-right': MenuArrowRight,
  'arrows-sort-up': ArrowsSortUpIcon,
  'arrows-sort-down': ArrowsSortDownIcon,
  lock: LockIcon,
  'lock-filled': LockFilledIcon,
  eye: EyeIcon,
  'eye-off': EyeOffIcon,
  server: ServerIcon,
  email: EmailIcon,
  'chevron-down': ChevronDownIcon,
  'arrow-left': ArrowLeftIcon,
  sync: SyncIcon,
  'check-circle': CheckCircleIcon,
  signIn: SignInIcon,
  signOut: SignOutIcon,
  'cloud-off': CloudOffIcon,
  'pencil-off': PencilOffIcon,
  'plain-text': PlainTextIcon,
  'rich-text': RichTextIcon,
  code: CodeIcon,
  markdown: MarkdownIcon,
  authenticator: AuthenticatorIcon,
  spreadsheets: SpreadsheetsIcon,
  tasks: TasksIcon,
  trash: TrashIcon,
  'trash-filled': TrashFilledIcon,
  pin: PinIcon,
  'pin-filled': PinFilledIcon,
  unpin: UnpinIcon,
  archive: ArchiveIcon,
  unarchive: UnarchiveIcon,
  hashtag: HashtagIcon,
  'chevron-right': ChevronRightIcon,
  restore: RestoreIcon,
  close: CloseIcon,
  password: PasswordIcon,
  'trash-sweep': TrashSweepIcon,
  more: MoreIcon,
  tune: TuneIcon,
  accessibility: AccessibilityIcon,
  add: AddIcon,
  help: HelpIcon,
  keyboard: KeyboardIcon,
  'list-bulleted': ListBulleted,
  'link-off': LinkOffIcon,
  listed: ListedIcon,
  security: SecurityIcon,
  settings: SettingsIcon,
  star: StarIcon,
  themes: ThemesIcon,
  user: UserIcon,
  copy: CopyIcon,
  download: DownloadIcon,
  info: InfoIcon,
  check: CheckIcon,
  'check-bold': CheckBoldIcon,
  'account-circle': AccountCircleIcon,
  'menu-arrow-down': MenuArrowDownIcon,
  'menu-close': MenuCloseIcon,
  window: WindowIcon,
  'premium-feature': PremiumFeatureIcon,
};

export type IconType = keyof typeof ICONS;

type Props = {
  type: IconType;
  className?: string;
  ariaHidden?: boolean;
};

export const Icon = ({ type, className = '', ariaHidden = false }: Props) => {
  const IconComponent = ICONS[type];
  return (
    <IconComponent
      className={`sn-icon ${className}`}
      {...(ariaHidden ? { 'aria-hidden': true } : {})}
    />
  );
};