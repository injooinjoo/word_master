import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing, Typography, withAlpha } from '../constants/theme';
import { Button, ResponsiveContainer, ScreenCard, SharedStyles } from '../ui';

interface Props {
  children: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    this.props.onReset?.();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <SafeAreaView style={styles.safe}>
        <ResponsiveContainer>
          <View style={styles.centered}>
            <View style={styles.backdropTop} />
            <View style={styles.backdropBottom} />
            <ScreenCard style={styles.card}>
              <Text style={SharedStyles.eyebrow}>System State</Text>
              <View style={styles.iconWrap}>
                <Text style={styles.icon}>!</Text>
              </View>
              <Text style={styles.title}>문제가 발생했습니다</Text>
              <Text style={styles.message}>
                앱에서 오류가 발생했습니다.{"\n"}
                아래 버튼을 눌러 다시 시작해주세요.
              </Text>
              <Button label="처음으로 돌아가기" variant="primary" onPress={this.handleReset} />
            </ScreenCard>
          </View>
        </ResponsiveContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    overflow: 'hidden',
  },
  backdropTop: {
    position: 'absolute',
    top: 80,
    right: -48,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: withAlpha(Colors.wrong, '12'),
  },
  backdropBottom: {
    position: 'absolute',
    left: -56,
    bottom: 60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: withAlpha(Colors.primary, '14'),
  },
  card: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconWrap: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: withAlpha(Colors.wrong, '12'),
    borderWidth: 1,
    borderColor: withAlpha(Colors.wrong, '40'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  icon: {
    fontSize: Typography.size30,
    fontWeight: Typography.weightExtraBold,
    color: Colors.wrong,
  },
  title: {
    fontSize: Typography.size23,
    fontWeight: Typography.weightExtraBold,
    color: Colors.textPrimary,
  },
  message: {
    fontSize: Typography.size13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.lg,
    fontWeight: Typography.weightMedium,
  },
});
